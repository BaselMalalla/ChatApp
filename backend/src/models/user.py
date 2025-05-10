from beanie import Document
from datetime import datetime, timezone
from pydantic import EmailStr, Field
from schemas.user import UserOut


class User(Document):
    username: str
    name: str
    email: EmailStr
    hashed_password: str = Field(..., exclude=True)
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

    class Settings:
        name = "users"
        indexes = [[("username", 1), ("email", 1)]]

    def to_pydantic(self) -> UserOut:
        return UserOut(
            id=str(self.id),
            username=self.username,
            name=self.name,
            email=self.email,
            created_at=self.created_at,
        )
