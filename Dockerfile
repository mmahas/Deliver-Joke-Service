# Stage 1: Development
FROM node:18-alpine AS dev

# Add the missing shared libraries from alpine base image
RUN apk add --no-cache libc6-compat

# Create app folder and set work directory
WORKDIR /app

# Copy source code into app folder
COPY --chown=node:node . .

# Install dependencies
RUN yarn --frozen-lockfile

# Stage 2: Build
FROM node:18-alpine AS build

# Add the missing shared libraries from alpine base image
RUN apk add --no-cache libc6-compat

# Set to production environment
ENV NODE_ENV production

# Create app folder and set work directory
WORKDIR /app

# Copy only the necessary files
COPY --chown=node:node --from=dev /app/node_modules ./node_modules
COPY --chown=node:node . .

# Build the project
RUN yarn build

# Clean up unnecessary packages and cache
RUN yarn --frozen-lockfile --production && yarn cache clean

# Stage 3: Production
FROM node:18-alpine AS prod

# Add the missing shared libraries from alpine base image
RUN apk add --no-cache libc6-compat

# Set to production environment
ENV NODE_ENV production

# Create app folder and set work directory
WORKDIR /app

# Copy only the necessary files
COPY --chown=node:node --from=build /app/dist dist
COPY --chown=node:node --from=build /app/node_modules node_modules

# Add .env file
COPY --chown=node:node .env ./

# Expose port
EXPOSE 8002

# Run application
CMD ["node", "dist/main.js"]
