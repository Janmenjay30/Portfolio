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

# Copy custom nginx configuration template
# This template will be processed to use the PORT environment variable
COPY <<EOF /etc/nginx/templates/default.conf.template
server {
    listen \${PORT};
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

# Set default PORT to 8080 for Cloud Run compatibility
# Cloud Run will override this with its own PORT environment variable
ENV PORT=8080

# Expose the PORT environment variable
# This is documentation; Cloud Run will use the PORT env var
EXPOSE 8080

# Start Nginx in the foreground (daemon off prevents it from running in background)
# The nginx image automatically processes templates in /etc/nginx/templates/
# and substitutes environment variables before starting
CMD ["nginx", "-g", "daemon off;"]
