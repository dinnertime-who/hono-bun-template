# Stage 1: Build environment
FROM oven/bun:1.2.4-slim as base

WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application (if necessary, e.g., for TypeScript)
RUN bun build src/index.ts --outfile dist/index.js --target bun

# Stage 2: Production environment
FROM oven/bun:1.2.4-slim as runner

WORKDIR /app

ENV PORT=3000

# Copy built application from the base stage
COPY --from=base /app/dist/index.js ./dist/index.js

# Expose the port your Hono app listens on
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "dist/index.js"]