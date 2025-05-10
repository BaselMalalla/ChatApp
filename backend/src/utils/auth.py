from fastapi import Request, HTTPException, status
from jose import jwt, JWTError
from config import settings
from models.user import User
from starlette import status


async def get_current_user(request: Request) -> User:
    """Extracts and verifies user from JWT in cookies"""
    if not (token := request.cookies.get("access_token")):
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Missing access token")

    try:
        payload = jwt.decode(
            token, settings.jwt_secret_key, algorithms=[settings.jwt_algorithm]
        )
        if not (email := payload.get("sub")):
            raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid token payload")

        if user := await User.find_one(User.email == email):
            return user
        raise HTTPException(status.HTTP_404_NOT_FOUND, "User not found")

    except JWTError:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, "Invalid or expired token")
