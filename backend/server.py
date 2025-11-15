from fastapi import FastAPI, APIRouter
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactResponse(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Rutuja Shukla Portfolio API"}

@api_router.post("/contact")
async def submit_contact(form: ContactForm):
    try:
        contact_data = {
            "id": str(uuid.uuid4()),
            "name": form.name,
            "email": form.email,
            "message": form.message,
            "timestamp": datetime.utcnow()
        }
        # Store a copy for response before MongoDB adds _id
        response_data = contact_data.copy()
        await db.contacts.insert_one(contact_data)
        return {
            "success": True,
            "message": "Message sent successfully!",
            "data": response_data
        }
    except Exception as e:
        logger.error(f"Contact form error: {e}")
        return {"success": False, "message": "Failed to send message"}

@api_router.get("/contacts")
async def get_contacts():
    try:
        contacts = await db.contacts.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
        return {"success": True, "data": contacts}
    except Exception as e:
        logger.error(f"Get contacts error: {e}")
        return {"success": False, "message": "Failed to fetch contacts"}

@api_router.get("/resume")
async def download_resume():
    resume_path = ROOT_DIR / "assets" / "Rutuja_Resume.pdf"
    if resume_path.exists():
        return FileResponse(
            path=resume_path,
            media_type="application/pdf",
            filename="Rutuja_Shukla_Resume.pdf"
        )
    return {"error": "Resume not found"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()