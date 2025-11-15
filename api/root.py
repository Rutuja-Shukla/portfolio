from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Rutuja Shukla Portfolio API"}

handler = Mangum(app)
