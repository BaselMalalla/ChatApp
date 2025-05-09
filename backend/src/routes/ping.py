from fastapi import APIRouter, Depends, HTTPException
from src.db import get_db

router = APIRouter()


@router.get("/ping")
async def ping(db=Depends(get_db)):
    try:
        result = await db.command("ping")
        print("MongoDB Ping Response:", result)  # Log the response to the console
        return {"message": "Ping successful", "db_response": result}
    except Exception as e:
        print(f"Error during ping: {e}")  # Log the error
        raise HTTPException(status_code=500, detail=f"Failed to ping MongoDB: {e}")
