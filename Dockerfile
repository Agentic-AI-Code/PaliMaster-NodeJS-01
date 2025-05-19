# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS base

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install app dependencies
# Use a production build if this were for production
# For now, a general install is fine
RUN npm install
# If you were building for production, you might use:
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose the port the app runs on
# Ensure this matches the PORT in your .env or server configuration
EXPOSE ${PORT:-3000}

# Define the command to run your app
CMD [ "node", "src/server.js" ]

# Healthcheck (Optional but good)
# HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
#  CMD curl -f http://localhost:${PORT:-3000}/api/v1/health || exit 1
