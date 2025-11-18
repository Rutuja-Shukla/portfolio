"""
Local development server for API endpoints
Run with: uvicorn api.server:app --reload --port 8000
Or: python -m uvicorn api.server:app --reload --port 8000
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi import HTTPException
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime
from dotenv import load_dotenv
import uuid
import os
import logging
from pathlib import Path
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import aiosmtplib

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Rutuja Shukla Portfolio API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
try:
    mongo_url = os.environ.get("MONGO_URL")
    db_name = os.environ.get("DB_NAME")
    
    if not mongo_url or not db_name:
        logger.warning("MONGO_URL or DB_NAME environment variables not set - database features will be disabled")
        client = None
        db = None
    else:
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        logger.info("MongoDB connection established")
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {e}")
    client = None
    db = None

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

# Email configuration
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_USER = os.environ.get("SMTP_USER")  # Your email address
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD")  # Your email password or app password
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", SMTP_USER)  # Email to receive notifications

# Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

# Email sending function
async def send_email_notification(contact_data: dict):
    """Send email notification when contact form is submitted"""
    if not SMTP_USER or not SMTP_PASSWORD:
        logger.warning("SMTP credentials not configured - email notification skipped")
        return False
    
    try:
        # Create message
        message = MIMEMultipart("alternative")
        message["From"] = SMTP_USER
        message["To"] = RECIPIENT_EMAIL
        message["Subject"] = f"New Contact Form Submission from {contact_data['name']}"
        
        # Create email body
        text = f"""
New Contact Form Submission

Name: {contact_data['name']}
Email: {contact_data['email']}
Message:
{contact_data['message']}

Submitted at: {contact_data['timestamp']}
        """
        
        html = f"""
        <html>
          <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {contact_data['name']}</p>
            <p><strong>Email:</strong> {contact_data['email']}</p>
            <p><strong>Message:</strong></p>
            <p>{contact_data['message'].replace(chr(10), '<br>')}</p>
            <p><em>Submitted at: {contact_data['timestamp']}</em></p>
          </body>
        </html>
        """
        
        # Add parts
        part1 = MIMEText(text, "plain")
        part2 = MIMEText(html, "html")
        message.attach(part1)
        message.attach(part2)
        
        # Send email
        # Gmail with port 587 requires STARTTLS (not direct SSL)
        await aiosmtplib.send(
            message,
            hostname=SMTP_HOST,
            port=SMTP_PORT,
            username=SMTP_USER,
            password=SMTP_PASSWORD,
            start_tls=True,
            use_tls=False,
        )
        
        logger.info(f"Email notification sent successfully to {RECIPIENT_EMAIL}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email notification: {e}", exc_info=True)
        return False

# Routes
@app.get("/")
async def root():
    return {
        "message": "Rutuja Shukla Portfolio API",
        "status": "healthy",
        "endpoints": {
            "contact": "/api/contact",
            "resume": "/api/resume",
            "health": "/api/health"
        }
    }

@app.get("/api")
async def api_root():
    return {
        "message": "Rutuja Shukla Portfolio API",
        "status": "healthy",
        "endpoints": {
            "contact": "/api/contact",
            "resume": "/api/resume",
            "health": "/api/health"
        }
    }

@app.get("/api/health")
async def health():
    return {"status": "healthy"}

@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    try:
        data = {
            "id": str(uuid.uuid4()),
            "name": form.name,
            "email": form.email,
            "message": form.message,
            "timestamp": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
        }
        
        # Try to save to database if available
        if db:
            try:
                await db.contacts.insert_one(data)
                logger.info(f"Contact form submitted successfully: {data['id']}")
            except Exception as db_error:
                logger.warning(f"Database save failed, but continuing: {db_error}")
                # Continue even if DB save fails
        else:
            logger.warning("MongoDB not configured - contact form data logged but not saved")
            logger.info(f"Contact form submission: {data}")
        
        # Send email notification
        email_sent = await send_email_notification(data)
        if not email_sent:
            logger.warning("Email notification was not sent (check SMTP configuration)")
        
        return { 
            "success": True, 
            "message": "Message sent successfully!",
            "data": data 
        }
    except Exception as e:
        logger.error(f"Error submitting contact form: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to send message: {str(e)}")

@app.get("/api/resume")
async def download_resume():
    try:
        pdf_path = BASE_DIR / "assets" / "RutujaShukla_Resume.pdf"
        
        if not pdf_path.exists():
            logger.error(f"Resume file not found at: {pdf_path}")
            raise HTTPException(status_code=404, detail="Resume file not found")
        
        logger.info(f"Serving resume from: {pdf_path}")
        return FileResponse(
            pdf_path,
            media_type="application/pdf",
            filename="Rutuja_Shukla_Resume.pdf",
            headers={
                "Content-Disposition": "attachment; filename=Rutuja_Shukla_Resume.pdf"
            }
        )
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error serving resume: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Failed to serve resume: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

