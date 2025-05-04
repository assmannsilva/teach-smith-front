# Estágio de desenvolvimento
FROM node:latest as dev-stage

WORKDIR /app
COPY ../package*.json ./
RUN npm install --prefer-offline --no-audit --progress=false

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]