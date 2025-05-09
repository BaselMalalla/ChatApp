"""Main FastAPI application for MongoDB-backed chat service."""

import os

from dotenv import load_dotenv
from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

load_dotenv()
app = FastAPI()

print("Starting the server...")
@app.get("/")
def read_root():
    return {"message": "Hello World"}


MONGO_URI = os.getenv("MONGO_URI")
client = AsyncIOMotorClient(MONGO_URI)
db = client["chatapp"]


@app.get("/ping")
async def ping():
    result = await db.command("ping")
    print("MongoDB Ping Response:", result)  # Verify response
    return result