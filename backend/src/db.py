from motor.motor_asyncio import AsyncIOMotorClient
from .config import settings

client = AsyncIOMotorClient(settings.MONGO_URI)
db = client["chatapp"]

# Return the database instance
async def get_db():
    return db
