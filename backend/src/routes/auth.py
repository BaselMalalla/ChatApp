from fastapi import APIRouter, HTTPException
from schemas.user import UserIn, UserOutWithToken, UserLoginSchema
from services.auth_service import register_user, authenticate_user
from utils.jwt import create_jwt_token
from models.user import User

router = APIRouter()


@router.post("/register", response_model=UserOutWithToken)
async def register(user_in: UserIn):
    # Check for existing email
    if await User.find_one(User.email == user_in.email):
        raise HTTPException(status_code=400, detail="Email already registered")

    # Register user
    user = await register_user(user_in)

    # Generate token
    token = create_jwt_token(user.email)

    # Return output with token
    return UserOutWithToken(
        id=str(user.id),
        username=user.username,
        name=user.name,
        email=user.email,
        created_at=user.created_at,
        token=token,
    )


@router.post("/login", response_model=UserOutWithToken)
async def login(user_login: UserLoginSchema):
    user = await authenticate_user(user_login.email, user_login.password)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_jwt_token(user.email)

    return UserOutWithToken(
        id=str(user.id),
        username=user.username,
        name=user.name,
        email=user.email,
        created_at=user.created_at,
        token=token,
    )
