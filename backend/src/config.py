from pydantic import Field
from pydantic_settings import SettingsConfigDict, BaseSettings


class Settings(BaseSettings):
    """
    Application settings loaded from environment variables or .env file.
    """

    model_config = SettingsConfigDict(
        extra="ignore", env_file=".env", env_file_encoding="utf-8"
    )

    # MongoDB connection string
    mongo_uri: str = Field(json_schema_extra={"type": "string", "env": "MONGO_URI"})

    # JWT Authentication
    jwt_secret_key: str = Field(
        json_schema_extra={"type": "string", "env": "JWT_SECRET_KEY"}
    )
    jwt_algorithm: str = Field(
        default="HS256", json_schema_extra={"env": "JWT_ALGORITHM"}
    )
    access_token_expire_minutes: int = Field(
        default=60, json_schema_extra={"env": "ACCESS_TOKEN_EXPIRE_MINUTES"}
    )
    refresh_token_expire_days: int = Field(
        default=7, json_schema_extra={"env": "REFRESH_TOKEN_EXPIRE_DAYS"}
    )

    # Database
    database_name: str = Field(
        default="chatapp", json_schema_extra={"env": "DATABASE_NAME"}
    )

    # Frontend URL
    frontend_url: str = Field(
        default="http://localhost:5173", json_schema_extra={"env": "FRONTEND_URL"}
    )


settings = Settings()
