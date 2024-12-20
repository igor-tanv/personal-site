# Use a Node.js base image with Debian Bullseye for better compatibility
FROM node:16-bullseye

# Set environment variables to ensure prebuilt binaries are used
ENV npm_config_platform=linux
ENV npm_config_arch=x64
ENV SHARP_IGNORE_GLOBAL_LIBVIPS 1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

RUN npm cache clean --force

RUN apt-get update && apt-get install -y --fix-missing python3 make g++ libvips-dev bash && rm -rf /var/lib/apt/lists/*

# Confirm Python installation
RUN python3 --version && which python3

# Set the PYTHON environment variable for node-gyp
ENV PYTHON /usr/bin/python3

# Install a modern version of node-gyp
RUN npm install -g node-gyp@9.4.0

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
