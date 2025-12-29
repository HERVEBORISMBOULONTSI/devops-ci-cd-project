# --- ÉTAPE 1 : BUILD (Construction) ---
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Cette commande crée le dossier 'dist' avec les fichiers finaux
RUN npm run build

# --- ÉTAPE 2 : RUN (Serveur Nginx) ---
FROM nginx:alpine

# On copie le résultat du build (dossier dist) vers le dossier HTML de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# On expose le port 80 (standard web)
EXPOSE 80

# On lance Nginx
CMD ["nginx", "-g", "daemon off;"]