from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from mangum import Mangum
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
import uuid
import os

app = FastAPI()

# MongoDB connection
client = AsyncIOMotorClient(os.environ["MONGO_URL"])
db = client[os.environ["DB_NAME"]]

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.post("/")
async def submit_contact(form: ContactForm):
    data = {
        "id": str(uuid.uuid4()),
        "name": form.name,
        "email": form.email,
        "message": form.message,
        "timestamp": datetime.utcnow()
    }
    await db.contacts.insert_one(data)
    return { "success": True, "data": data }

handler = Mangum(app)
