from fastapi import FastAPI
from fastapi.responses import FileResponse
from mangum import Mangum
from pathlib import Path

app = FastAPI()
BASE_DIR = Path(__file__).resolve().parent

@app.get("/")
async def download_resume():
    pdf_path = BASE_DIR / "assets" / "Rutuja_Resume.pdf"
    return FileResponse(
        pdf_path,
        media_type="application/pdf",
        filename="Rutuja_Shukla_Resume.pdf"
    )

handler = Mangum(app)
