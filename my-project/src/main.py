from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
import os
from passlib.context import CryptContext
from dotenv import load_dotenv
import uuid  # For generating session IDs

load_dotenv("dbconfig.env")

app = FastAPI()

origins = ["http://localhost:3001"]


class LoginRequest(BaseModel):
    email: str
    password: str


class UserRegistration(BaseModel):
    username: str
    email: str
    password: str


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)

db_config = {
    "host": os.getenv("DB_HOST", "default_host_value"),
    "user": os.getenv("DB_USER", "default_user_value"),
    "password": os.getenv("DB_PASSWORD", "default_password"),
    "database": os.getenv("DB_NAME", "default_db_name")
}

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_db_cursor():
    connection = mysql.connector.connect(**db_config)
    return connection, connection.cursor(dictionary=True)


def close_db_cursor(cursor, connection):
    cursor.close()
    connection.close()


@app.get("/")
async def funcTest1():
    return "Hello, this is fastAPI data"

# gets User


@app.get("/users/")
async def get_users():
    connection, cursor = get_db_cursor()
    try:
        cursor.execute("SELECT * FROM Users")
        users = cursor.fetchall()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)
    return users

# tests registration authentication


@app.post("/users/register/")
async def register_user(user_data: UserRegistration):
    connection, cursor = get_db_cursor()
    hashed_password = pwd_context.hash(user_data.password)

    cursor.execute("SELECT * FROM Users WHERE email=%s", (user_data.email,))
    if cursor.fetchone():
        close_db_cursor(cursor, connection)
        raise HTTPException(status_code=400, detail="Email already exists.")

    try:
        cursor.execute("INSERT INTO Users (username, email, password) VALUES (%s, %s, %s)",
                       (user_data.username, user_data.email, hashed_password))
        connection.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)

    return {"status": "success", "username": user_data.username, "email": user_data.email}


def get_current_user(session_id: str = None):
    if not session_id:
        raise HTTPException(status_code=401, detail="Invalid session")
    connection, cursor = get_db_cursor()
    try:
        user = get_db_session(cursor, session_id)
    except HTTPException as e:
        raise e
    finally:
        close_db_cursor(cursor, connection)
    return user


def get_db_session(cursor, session_id: str):
    cursor.execute("SELECT * FROM Sessions WHERE session_id=%s", (session_id,))
    session = cursor.fetchone()
    if not session:
        raise HTTPException(
            status_code=401, detail="Invalid or expired session")
    # Assuming that user data is also needed, you can fetch that using user_id from the session
    cursor.execute("SELECT * FROM Users WHERE id=%s", (session['user_id'],))
    user = cursor.fetchone()
    if not user:
        raise HTTPException(
            status_code=500, detail="User not found for the session")
    return user


@app.post("/users/login/")
async def login_user(user_data: LoginRequest):
    email = user_data.email
    password = user_data.password
    connection, cursor = get_db_cursor()
    try:
        cursor.execute("SELECT * FROM Users WHERE email=%s", (email,))
        user = cursor.fetchone()
        if user and pwd_context.verify(password, user['password']):
            session_id = str(uuid.uuid4())
            cursor.execute("INSERT INTO Sessions (session_id, user_id, created_at, expires_at) VALUES (%s, %s, NOW(), DATE_ADD(NOW(), INTERVAL 1 DAY))",
                           (session_id, user['user_id']))
            connection.commit()
            return {"status": "success", "session_id": session_id}
        raise HTTPException(status_code=401, detail="Invalid credentials")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)


@app.post("/users/logout/")
async def logout_user(session_id: str):
    connection, cursor = get_db_cursor()
    try:
        cursor.execute(
            "DELETE FROM sessions WHERE session_id=%s", (session_id,))
        connection.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)
    return {"status": "success"}


@app.get("/users/details/")
async def get_user_details(current_user=Depends(get_current_user)):
    user = current_user
    del user['password']
    return user


@app.get("/products/search/")
async def search_products(query: str):
    connection, cursor = get_db_cursor()
    try:
        cursor.execute(
            "SELECT * FROM Products WHERE product_name LIKE %s", (f"%{query}%",))
        products = cursor.fetchall()
        if not products:
            raise HTTPException(status_code=404, detail="No products found")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)
    return products

# gets Product


@app.get("/products/")
async def get_products():
    connection, cursor = get_db_cursor()
    try:
        cursor.execute("SELECT * FROM Products")
        products = cursor.fetchall()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)
    return products

# gets Transaction


@app.get("/transactions/")
async def get_transactions():
    connection, cursor = get_db_cursor()
    try:
        cursor.execute("SELECT * FROM Transactions")
        transactions = cursor.fetchall()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)
    return transactions
