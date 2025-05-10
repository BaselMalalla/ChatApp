from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware  # <-- Add this
from routes import root, ping, auth, token_test
from lifespan import lifespan
from config import settings

app = FastAPI(lifespan=lifespan)

# ======== ADD THIS CORS CONFIG ======== #
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontend_url],  # Your Vite frontend URL
    allow_credentials=True,  # Required for cookies/session auth
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers (Authorization, etc.)
)
# ====================================== #

# Include routes
app.include_router(root.router)
app.include_router(ping.router)
app.include_router(auth.router)
app.include_router(token_test.router, prefix="/user", tags=["Users"])
