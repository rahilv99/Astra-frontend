FROM node:23-alpine

RUN apk add --no-cache bash

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# COPY package.json package-lock.json ./
#COPY package.json ./

# Install dependencies
#RUN npm install --production

# Copy the rest of the application code
#COPY . .

# Build the Next.js application
#RUN npm run build

# Expose the application port
EXPOSE 3000

# Define the command to run the app
#CMD ["npm", "run", "start"]
CMD ["bash"]
