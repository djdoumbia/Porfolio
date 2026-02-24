FROM node:24-alpine

WORKDIR /app

# Copier les fichiers package
COPY package*.json ./
RUN npm install

# Copier le reste du projet
COPY . .

# Construire React pour production
RUN npm run build

# Servir avec un serveur léger
RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]
