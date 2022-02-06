# Images
FROM python:3.9

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Define work directory
WORKDIR ./Server

# Copy the Server project folder into the container's working directory
COPY . .

# Install python 3 dependencies
RUN pip install --no-cache-dir -r requirements.txt
