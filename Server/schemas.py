from typing import Optional

from pydantic import BaseModel


class UserBase(BaseModel):
    name: str
    middle_name: Optional[str] = None
    surname: str
    birth_date: str
    email: str
    username: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    disabled: Optional[bool] = None

    class Config:
        orm_mode = True
