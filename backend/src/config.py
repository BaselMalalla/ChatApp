import os
from dotenv import load_dotenv

load_dotenv()

# Settings used throughout the app
class Settings:
    MONGO_URI: str = os.getenv("MONGO_URI")


settings = Settings()
