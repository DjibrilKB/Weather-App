# Utilise l'image Node 18
FROM node:18

# Définit le répertoire de travail
WORKDIR /usr/src/app

# clé de l'application
ENV api_key e814d9fea4d64d48805132106252201

# Copie les fichiers package.json et package-lock.json (pour les dépendances)
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tous les fichiers de l'application dans le conteneur
COPY . .


EXPOSE 3000

