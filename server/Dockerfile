# Specify a bae image
FROM node:alpine

WORKDIR /app/server

# Install some dependencies
COPY ./package.json ./
# COPY package.json .
RUN npm install
COPY ./ ./
# COPY . .

# Default command
CMD ["npm", "start"]