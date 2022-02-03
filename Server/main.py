from fastapi import FastAPI
from .database import database, User

app = FastAPI(title="Handcrafters Server")


# @app.get("/")
# def read_root():
#     return {"Hello": "World"}

@app.get("/")
async def read_root():
    return await User.objects.all()


@app.on_event("startup")
async def startup():
    if not database.is_connected:
        await database.connect()
        print("Database is connected: ", database.is_connected)
    # create a dummy entry
    await User.objects.get_or_create(email="test@test.com")


@app.on_event("shutdown")
async def shutdown():
    if database.is_connected:
        await database.disconnect()
