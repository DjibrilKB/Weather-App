# Utiliser une image officielle Node.js comme base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de package pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port 3000 (par défaut pour React)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
