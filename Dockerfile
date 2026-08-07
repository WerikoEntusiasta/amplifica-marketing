# Stage 1: Build Frontend & Native Dependencies
FROM node:24-alpine AS builder
WORKDIR /app

# Install build tools required for native C++ modules (better-sqlite3)
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production Server & Static App Runner
FROM node:24-alpine AS runner
WORKDIR /app

# Install runtime build tools required for native C++ modules (better-sqlite3)
RUN apk add --no-cache python3 make g++

ENV NODE_ENV=production
ENV PORT=3001

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/server ./server
COPY --from=builder /app/.env.example ./.env.example

# Create SQLite data volume mount point
RUN mkdir -p /app/server/data

EXPOSE 3001

CMD ["node", "server/server.js"]
