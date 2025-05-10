from fastapi import APIRouter, Request, Response
from schemas.user import UserIn, UserOut, UserLoginSchema
from services.auth_service import (
    register_user,
    authenticate_user,
    refresh_access_token,
    logout_user,
)

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post("/register", response_model=UserOut)
async def register(user_in: UserIn, response: Response):
    return await register_user(user_in, response)


@router.post("/login", response_model=UserOut)
async def login(credentials: UserLoginSchema, response: Response):
    return await authenticate_user(credentials.email, credentials.password, response)


@router.post("/refresh", response_model=UserOut)
async def refresh(request: Request, response: Response):
    return await refresh_access_token(request, response)


@router.post("/logout")
async def logout(response: Response):
    """Endpoint triggers secure cookie clearing"""
    return await logout_user(response)
