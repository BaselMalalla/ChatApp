from typing import AsyncGenerator
from fastapi import FastAPI
from .db import client
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("--->") # Create a custom logger


async def lifespan(app: FastAPI) -> AsyncGenerator:
    # Perform startup logic here (e.g., connect to databases)
    logger.info("Starting the server...")

    try:
        # Optional: Run a health check for critical services (e.g., database connection)
        logger.info("Checking database connection...")
        response = await client.admin.command("ping")  # Check MongoDB connection
        logger.info(f"MongoDB ping response: {response}")

        # Yield control back to the app while it's running
        yield

    except Exception as e:
        logger.error(f"Error during startup: {e}")
        raise Exception(f"Failed to start the app: {e}")

    finally:
        # Perform cleanup and shutdown logic (e.g., close DB connections)
        logger.info("Shutting down...")
        client.close()  # Close MongoDB connection or perform any cleanup tasks
        logger.info("Shutdown complete.")
