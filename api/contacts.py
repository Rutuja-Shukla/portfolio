from fastapi import FastAPI
from mangum import Mangum
from motor.motor_asyncio import AsyncIOMotorClient
import os

app = FastAPI()

client = AsyncIOMotorClient(os.environ["MONGO_URL"])
db = client[os.environ["DB_NAME"]]

@app.get("/")
async def get_contacts():
    items = await db.contacts.find({}, {"_id": 0}).sort("timestamp", -1).to_list(1000)
    return { "success": True, "data": items }

handler = Mangum(app)
