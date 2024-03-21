FROM node:20
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . .
RUN npx prisma generate
CMD ["npm", "run", "start:dev"]