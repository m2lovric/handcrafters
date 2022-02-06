# Images
FROM node:16.5-alpine

# Install bash to image
RUN apk update && apk add bash

# Define work directory
WORKDIR .

# Copy the project
COPY . .

# NPM pipeline
RUN npm install
RUN npm run build
CMD ["npm", "start"]
