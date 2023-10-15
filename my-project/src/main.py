from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
from fastapi.middleware.cors import CORSMiddleware
from web3 import Web3
from solcx import compile_standard, install_solc
import json
from typing import List

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserLogin(BaseModel):
    email: str
    password: str


class ProductModel(BaseModel):
    product_name: str
    description: str
    image_path: str
    category: str
    price: float
    seller: int
    isTrending: bool

class PurchaseItem(BaseModel):
    user_id: int
    item_id: int
    price: float
    
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


@app.post("/login/")
async def login_user(credentials: UserLogin):
    connection, cursor = get_db_cursor()
    try:
        cursor.execute("SELECT * FROM Users WHERE email = %s",
                       (credentials.email,))
        user = cursor.fetchone()
        if not user:
            raise HTTPException(
                status_code=400, detail="Incorrect email or password")

        if user["password"] != credentials.password:
            raise HTTPException(
                status_code=400, detail="Incorrect email or password")
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)

    return {"status": "success", "user_id": user["user_id"]}



# ENDPOINT FOR GET ALL USERS


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

# ENDPOINT FOR GET ALL PRODUCTS


@app.get("/products/")
async def get_products(trending: bool = None, category: str = None):
    connection, cursor = get_db_cursor()

    query = "SELECT * FROM Products"

    if trending:
        query += " WHERE isTrending=1"
    elif category:
        query += " WHERE category=%s"

    try:
        if category:
            cursor.execute(query, (category,))
        else:
            cursor.execute(query)
        products = cursor.fetchall()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)

    return products


# ENDPOINT FOR GETTING INDIVIDUAL PRODUCT INFORMATION
@app.get("/products/{item_id}")
async def get_product(item_id: int):
    connection, cursor = get_db_cursor()

    try:
        cursor.execute("SELECT * FROM Products WHERE item_id=%s", (item_id,))
        product = cursor.fetchone()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)

    return product


# ENDPOINT FOR SAVING WALLET ADDRESSES
@app.post("/users/save_wallet_address/")
async def save_wallet_address(address: str):
    connection, cursor = get_db_cursor()

    try:
        cursor.execute(
            "INSERT INTO Users (wallet_address) VALUES (%s) ON DUPLICATE KEY UPDATE wallet_address=%s", (address, address))
        connection.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)

    return {"status": "success", "address": address}

# ENDPOINT FOR SUBMIT PAGE


@app.post("/upload_product/")
async def add_product(product: ProductModel):
    connection, cursor = get_db_cursor()

    try:
        cursor.execute(
            "INSERT INTO Products (product_name, description, image_path, category, price, seller, isTrending) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (product.product_name, product.description, product.image_path,
             product.category, product.price, product.seller, product.isTrending)
        )
        connection.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail="Database error")
    finally:
        close_db_cursor(cursor, connection)

    return {"status": "success", "message": "Product added successfully"}

# BLOCKCHAIN RELATED CODE AND ENDPOINTS

@app.get("/deployContract")
async def deploy_contract():
    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
    chain_id = 1337
    my_address = "0x9BF1Ed3edb7B294D468B4e34D7404E6e10ed64c6"
    private_key = "0xee0da644ed74743d71a27799592eb0895dd0bd443b1e0e117530f6249ebe40d6"

    with open("../contracts/SmartContract.sol", "r") as file:
        smart_contract_file = file.read()

    install_solc("0.6.0")
    compiled_sol = compile_standard(
        {
            "language": "Solidity",
            "sources": {"SmartContract.sol": {"content": smart_contract_file}},
            "settings": {
                "outputSelection": {
                    "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
                }
            },
        },
        solc_version="0.6.0",
    )

    with open("compiled_code.json", "w") as file:
        json.dump(compiled_sol, file)

    bytecode = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["evm"]["bytecode"]["object"]
    abi = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["abi"]

    try:
        SmartContract = w3.eth.contract(abi=abi, bytecode=bytecode)
        nonce = w3.eth.get_transaction_count(my_address)
        transaction = SmartContract.constructor().build_transaction({
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": my_address,
            "nonce": nonce,
        })
        transaction.pop('to')

        signed_txn = w3.eth.account.sign_transaction(transaction, private_key=private_key)
        tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
        global deployed_contract_address
        deployed_contract_address = tx_receipt.contractAddress

    # Save to a file for persistence
        with open("contract_address.txt", "w") as file:
            file.write(deployed_contract_address)

        print(f"Smart Contract deployed at address: {deployed_contract_address}")
        return {"Smart Contract deployed": deployed_contract_address}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Blockchain operation failed: {e}")


@app.post("/purchase_product/")
async def purchase_product(purchase: PurchaseItem):
    print(purchase)
    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
    chain_id = 1337
    my_address = "0x9BF1Ed3edb7B294D468B4e34D7404E6e10ed64c6"
    private_key = "0xee0da644ed74743d71a27799592eb0895dd0bd443b1e0e117530f6249ebe40d6"

    with open("compiled_code.json", "r") as file:
        compiled_sol = json.load(file)
    abi = compiled_sol["contracts"]["SmartContract.sol"]["SmartContract"]["abi"]
    with open("contract_address.txt", "r") as file:
        contract_address = file.read().strip()
    smart_contract = w3.eth.contract(address=contract_address, abi=abi)
    
    try:
        nonce = w3.eth.get_transaction_count(my_address)
        amount_in_wei = int(purchase.price * (10 ** 18))
        
        tx = smart_contract.functions.purchaseItem(purchase.item_id, amount_in_wei).build_transaction({
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": my_address,
            "nonce": nonce,
            "value": amount_in_wei
        })

        signed_txn = w3.eth.account.sign_transaction(tx, private_key=private_key)
        tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
        tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)

        # Recording the transaction in the MySQL database
        connection, cursor = get_db_cursor()
        cursor.execute(
            "INSERT INTO Transactions (user_id, item_id, transaction_hash) VALUES (%s, %s, %s)",
            (purchase.user_id, purchase.item_id, tx_hash.hex())
        )
        connection.commit()
        close_db_cursor(cursor, connection)

        return {
            "status": "success",
            "transaction_hash": tx_hash.hex()
        }

    except Exception as e:
        print(f"Full exception details: {e}")
        return {
            "status": "Failed",
            "error": str(e)
        }
        
@app.get("/checkContractDeployment")
async def check_contract_deployment():
    try:
        with open("contract_address.txt", "r") as file:
            contract_address = file.read().strip()
            if contract_address:
                return {"isDeployed": True}
        return {"isDeployed": False}
    except:
        return {"isDeployed": False}



