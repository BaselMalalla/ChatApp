from fastapi import Response, HTTPException, Request, status
from datetime import datetime, timezone
from models.user import User
from schemas.user import UserIn, UserOut
from utils.hashing import hash_password, verify_password
from utils.jwt import create_access_token, create_refresh_token, verify_refresh_token


async def register_user(user_in: UserIn, response: Response) -> UserOut:
    """Secure registration with HTTP-only refresh cookie"""
    if await User.find_one(User.email == user_in.email):
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        email=user_in.email,
        username=user_in.username,
        name=user_in.name,
        hashed_password=hash_password(user_in.password),
        created_at=datetime.now(timezone.utc),
    )
    await user.insert()

    # Set secure cookies
    _set_auth_cookies(response, user.email)
    return UserOut(**user.to_pydantic().model_dump())


async def authenticate_user(email: str, password: str, response: Response) -> UserOut:
    """Secure login with HTTP-only cookies"""
    user = await User.find_one(User.email == email)
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    _set_auth_cookies(response, user.email)
    return UserOut(**user.to_pydantic().model_dump())


async def refresh_access_token(request: Request, response: Response) -> UserOut:
    """Secure token refresh with cookie rotation"""
    refresh_token = request.cookies.get("refresh_token")
    if not refresh_token:
        raise HTTPException(status_code=401, detail="Missing refresh token")

    payload = verify_refresh_token(refresh_token)
    user = await User.find_one(User.email == payload.get("sub"))
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Rotate refresh token (new cookie)
    _set_auth_cookies(response, user.email)
    return UserOut(**user.to_pydantic().model_dump())


def _set_auth_cookies(response: Response, email: str):
    """Internal: Sets secure HTTP-only cookies"""
    response.set_cookie(
        key="access_token",
        value=create_access_token(email),
        httponly=True,
        secure=True,
        samesite="strict",
        max_age=900,  # 15 minutes
    )
    response.set_cookie(
        key="refresh_token",
        value=create_refresh_token(email),
        httponly=True,
        secure=True,
        samesite="strict",
        max_age=2_592_000,  # 30 days
    )

from fastapi import Response

async def logout_user(response: Response) -> dict:
    """
    Secure logout by clearing HTTP-only auth cookies.
    Doesn't maintain server-side state (no blacklist).
    """
    _clear_auth_cookies(response)
    return {"message": "Successfully logged out"}

def _clear_auth_cookies(response: Response):
    """Clears auth cookies with secure flags matching login"""
    cookie_args = {
        "httponly": True,
        "secure": True,    # HTTPS only
        "samesite": "lax"  # Balances security and usability
    }
    response.delete_cookie("access_token", **cookie_args)
    response.delete_cookie("refresh_token", **cookie_args)