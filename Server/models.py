from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
import database


class User(database.Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    middle_name = Column(String)
    surname = Column(String)
    birth_date = Column(String)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True)
    password = Column(String)
    disabled = Column(Boolean, default=True)
