from fastapi import FastAPI
from src.routes import root, ping
from src.lifespan import lifespan

app = FastAPI(lifespan=lifespan)

# Include routes
app.include_router(root.router)
app.include_router(ping.router)
