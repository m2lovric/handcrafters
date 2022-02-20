from sqlalchemy.orm import Session

import models
import schemas
import authentication


def get_user_by_id(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter(models.User.username == username).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    # TODO: Create REAL hashing functionality
    fake_hashed_password = authentication.hashed_password(user.password)
    db_user = models.User(name=user.name,
                          middle_name=user.middle_name,
                          surname=user.surname,
                          birth_date=user.birth_date,
                          email=user.email,
                          username=user.username,
                          password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
