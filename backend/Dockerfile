# 1. Utiliser une image Node.js légère
FROM node:20-alpine

# 2. Définir le dossier de travail dans le conteneur
WORKDIR /app

# 3. Copier les fichiers de dépendances
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier tout le reste du code source
COPY . .

# 6. Construire l'application NestJS (crée le dossier /dist)
RUN npm run build

# 7. Exposer le port 3000 (celui de NestJS par défaut)
EXPOSE 3000

# 8. Commande de démarrage en production
CMD ["npm", "run", "start:prod"]