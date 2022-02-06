from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    middle_name = Column(String)
    surname = Column(String)
    birth_date = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    active = Column(Boolean, default=True)
