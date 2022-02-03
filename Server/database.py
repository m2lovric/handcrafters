from databases import Database
from sqlalchemy import MetaData, create_engine
from ormar import Model, ModelMeta, Integer, String, Boolean
from .config import settings

database = Database(settings.db_url)
metadata = MetaData()


class BaseMeta(ModelMeta):
    metadata = metadata
    database = database


class User(Model):
    class Meta(BaseMeta):
        tablename = "users"

    id: int = Integer(primary_key=True)
    email: str = String(max_length=128, unique=True, nullable=False)
    active: bool = Boolean(default=True, nullable=False)


engine = create_engine(settings.db_url)
metadata.create_all(engine)
