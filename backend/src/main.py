from fastapi import FastAPI
from routes import root, ping, auth, token_test
from lifespan import lifespan

app = FastAPI(lifespan=lifespan)

# Include routes
app.include_router(root.router)
app.include_router(ping.router)
app.include_router(auth.router)
app.include_router(token_test.router, prefix="/users", tags=["Users"])
