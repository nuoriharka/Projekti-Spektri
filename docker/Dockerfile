# Vaihe 1: Rakennus
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps && npm audit fix --force
COPY . .
RUN npm run build

# Vaihe 2: Tuotanto
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production

# Asenna PM2
RUN npm install -g pm2

EXPOSE 5000
CMD ["pm2-runtime", "npm", "--", "start"]




