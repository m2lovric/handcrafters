from pydantic import BaseSettings, Field

origins = ["http://localhost:3000",
           "https://localhost:3000"]


class Settings(BaseSettings):
    db_url: str = Field(..., env='DATABASE_URL')


settings = Settings()
