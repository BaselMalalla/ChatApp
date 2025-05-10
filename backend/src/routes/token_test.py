from fastapi import APIRouter, Depends
from utils.auth import get_current_user
from models.user import User

router = APIRouter()


@router.get("/me")
async def get_my_profile(current_user: User = Depends(get_current_user)):
    return current_user
