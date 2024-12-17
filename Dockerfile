# Use a Node.js base image with Debian Bullseye for better compatibility
FROM node:16-bullseye

# Set environment variables to ensure prebuilt binaries are used
ENV npm_config_platform=linux
ENV npm_config_arch=x64

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

RUN npm cache clean --force

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Gatsby site
RUN npm run build

# Expose the default port Gatsby serves on
EXPOSE 8000

# Command to run the Gatsby development server
CMD ["npm", "run", "serve"]
