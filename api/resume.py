from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from pathlib import Path
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

BASE_DIR = Path(__file__).resolve().parent

@app.get("/")
async def download_resume():
    try:
        # Correct filename based on actual file in api/assets
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

# Export handler for Vercel
handler = Mangum(app)
