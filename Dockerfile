# Stage 1: Build stage
# Use Node.js 20 Alpine (lightweight Linux distribution) as the base image for building
FROM node:20-alpine AS build

# Set the working directory inside the container to /app
# All subsequent commands will run from this directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the working directory
# This is done separately to leverage Docker's layer caching
# If dependencies haven't changed, Docker will use cached layers
COPY package*.json ./

# Install all dependencies (including devDependencies needed for building)
# --frozen-lockfile ensures exact versions from package-lock.json are installed
RUN npm ci

# Copy the rest of the application source code to the working directory
# This includes src/, public/, config files, etc.
COPY . .

# Run the build command to bundle the React app
# This creates optimized production files in the dist/ directory
RUN npm run build

# Stage 2: Production stage
# Use Nginx Alpine as the base image for serving static files
# Nginx is a lightweight, high-performance web server
FROM nginx:alpine

# Copy the built React app from the build stage to Nginx's default serving directory
# --from=build tells Docker to copy from the previous stage named "build"
# /app/dist is where Vite outputs the production build
# /usr/share/nginx/html is where Nginx serves files from by default
COPY --from=build /app/dist /usr/share/nginx/html

# Create a custom Nginx configuration to handle client-side routing
# This ensures that all routes are handled by React Router (if used)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 80 to allow external access to the web server
# This is documentation; you still need to map ports when running the container
EXPOSE 80

# Start Nginx in the foreground (daemon off prevents it from running in background)
# This keeps the container running
CMD ["nginx", "-g", "daemon off;"]
