# Use a Node.js base image with necessary build tools
FROM mhart/alpine-node:16

# Set environment variables for sharp and node-gyp
ENV npm_config_platform=linux
ENV npm_config_arch=x64
ENV SHARP_IGNORE_GLOBAL_LIBVIPS=1
ENV PYTHON=/usr/bin/python3

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN apk add --no-cache python3 make g++ bash && \
    npm install -g node-gyp && \
    npm install sharp --force && npm install

# Copy the rest of the application code
COPY . .

# Build the Gatsby site
RUN npm run build

# Expose the default port Gatsby serves on
EXPOSE 8000

# Command to run the Gatsby development server
CMD ["npm", "run", "serve"]