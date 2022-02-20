from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


# TODO: Create REAL hashing functionality
def hashed_password(password: str):
    return password + "notreallyhashed"
