from datetime import datetime, timezone

from models.user import User
from schemas.user import UserIn, UserOutWithToken
from utils.hashing import hash_password, verify_password
from utils.jwt import create_jwt_token
import logging

Logger = logging.getLogger(__name__)


async def register_user(user_in: UserIn) -> UserOutWithToken:
    """
    Registers a new user and returns user data along with a JWT token.
    """
    hashed = hash_password(user_in.password)

    user = User(
        username=user_in.username,
        name=user_in.name,
        email=user_in.email,
        hashed_password=hashed,
        created_at=datetime.now(timezone.utc),
    )

    await user.insert()

    token = create_jwt_token({"user_id": str(user.id)})
    Logger.info(token)
    # Replace dict() with model_dump()
    return UserOutWithToken(**user.to_pydantic().model_dump(), token=token)


async def authenticate_user(email: str, password: str) -> User | None:
    """
    Authenticates a user based on email and password.
    Returns the user object if authenticated, otherwise None.
    """
    user = await User.find_one(User.email == email)

    if not user or not verify_password(password, user.hashed_password):
        return None

    return user
