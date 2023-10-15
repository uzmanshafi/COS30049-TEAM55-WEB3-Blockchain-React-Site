from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MySQL database connection configuration
db_config = {
    "host": "feenix-mariadb.swin.edu.au",
    "user": "s102608927",
    "password": "tempPass121@",
    "database": "s102608927_db"
}

def get_db_cursor():
    connection = mysql.connector.connect(**db_config)
    return connection, connection.cursor(dictionary=True)

def close_db_cursor(cursor, connection):
    cursor.close()
    connection.close()

@app.get("/")
async def funcTest1():
    return "Hello, this is fastAPI data"

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

@app.get("/products/")
async def get_products(trending: bool = None):
    connection, cursor = get_db_cursor()
    
    try:
        if trending:
            cursor.execute("SELECT * FROM Products WHERE isTrending=1")
        else:
            cursor.execute("SELECT * FROM Products")
            
        products = cursor.fetchall()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)
    
    return products


@app.post("/users/save_wallet_address/")
async def save_wallet_address(address: str):
    connection, cursor = get_db_cursor()
    
    try:
        cursor.execute("INSERT INTO Users (wallet_address) VALUES (%s) ON DUPLICATE KEY UPDATE wallet_address=%s", (address, address))
        connection.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)
    
    return {"status": "success", "address": address}

