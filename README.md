Voici un README proprement formaté et optimisé pour un copier-coller :

---

# **Weather App 🌦️**

Une application météo moderne et réactive développée avec **React**, **Redux**, **Vite**, et **Tailwind CSS**, déployée à l'aide de **Docker**. Cette application utilise une API météo pour fournir des informations en temps réel.

---

## **Fonctionnalités 🚀**

- **Recherche météo** : Saisissez le nom d'une ville pour obtenir des informations météo en temps réel.
- **Interface moderne** : Un design responsive et esthétique grâce à Tailwind CSS.
- **Gestion d'état efficace** : Utilisation de Redux pour gérer les données de manière fluide.
- **Performances optimales** : Construite avec Vite pour des temps de chargement rapides.
- **Conteneurisation** : Déployable avec Docker et Docker Compose.

---

## **Prérequis 📋**

- **Node.js** installé localement (si utilisation hors Docker).
- **Docker** et **Docker Compose** pour la conteneurisation.
- Une clé API valide pour **OpenWeather**.

---

## **Installation 🛠️**

### **1. Clonez le dépôt**
```bash
git clone https://github.com/votre-utilisateur/weather-app.git
cd weather-app
```

### **2. Configurez l'API**
Créez un fichier `.env` à la racine avec votre clé API :
```env
API_KEY=your_openweather_api_key_here
```

### **3. Démarrez avec Docker**
```bash
docker compose up --build
```
Accédez à l'application via [http://localhost:3000](http://localhost:3000).

---

## **Développement 💻**

### **Lancer localement (sans Docker)**

1. Installez les dépendances :
   ```bash
   npm install
   ```

2. Lancez le mode développement :
   ```bash
   npm run dev
   ```

3. Accédez à l'application sur [http://localhost:5173](http://localhost:5173).

---

## **Structure du Projet 📂**

```plaintext
weather-app/
├── src/
│   ├── components/        # Composants React
│   ├── redux/             # Configuration Redux
│   ├── App.jsx            # Composant principal
│   ├── index.css          # Styles avec Tailwind
│   └── main.jsx           # Point d'entrée
├── public/                # Fichiers statiques
├── .env                   # Variables d'environnement
├── Dockerfile             # Fichier Docker
├── docker-compose.yml     # Configuration Docker Compose
├── package.json           # Dépendances et scripts
└── README.md              # Documentation
```

---

## **Technologies Utilisées 🛠️**

- **React** : Bibliothèque pour créer des interfaces utilisateur.
- **Redux** : Gestion d'état centralisée.
- **Vite** : Environnement de développement rapide.
- **Tailwind CSS** : Framework CSS utilitaire.
- **OpenWeather API** : Source des données météo.
- **Docker** : Conteneurisation de l'application.

---

## **Contribution 🤝**

1. Forkez ce dépôt.
2. Créez une branche :  
   ```bash
   git checkout -b feature-nom
   ```
3. Faites vos modifications et commitez :  
   ```bash
   git commit -m "Ajout de X"
   ```
4. Poussez vos modifications :  
   ```bash
   git push origin feature-nom
   ```
5. Ouvrez une Pull Request.

---

## **Auteur 👨‍💻**

- **Votre Nom** - [Votre GitHub](https://github.com/votre-utilisateur)

---
