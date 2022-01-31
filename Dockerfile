# Images
FROM python:3.9

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Define work directory
WORKDIR /hancrafters

# Install Python dependencies
COPY ./Server/requirements.txt .

# Install python 3 dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project
COPY . .
