from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "message": "Rutuja Shukla Portfolio API",
        "status": "healthy",
        "endpoints": {
            "contact": "/api/contact",
            "resume": "/api/resume"
        }
    }

@app.get("/health")
async def health():
    return {"status": "healthy"}

# Export handler for Vercel
handler = Mangum(app)

