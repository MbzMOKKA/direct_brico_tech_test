### 1. INSTALLER L'APPLICATION :

· Prérequis :
    - Avoir installer NodeJS

· Étapes :
    - Ouvrir Git Bash là où vous souhaitez installer l'application
    - Executer la commande suivante : git clone https://github.com/MbzMOKKA/direct_brico_tech_test.git
    - Le dossier "direct_brico_tech_test" devrait apparaitre
    - Executer la commande suivante dans le sous-dossier "backend" et dans le sous-dossier "frontend" : npm install
    - Créer un fichier .env dans le sous-dossier "backend" contenant quelque chose tel que :
            PORT=8000
            TOKEN_SECRET_WORD='a651z4875ij416s89t4118864ez19f'


### 2. LANCER L'APPLICATION :

· Prérequis :
    - Avoir installer l'application

· Étapes :
    - Executer la commande suivante dans le dossier "direct_brico_tech_test/backend" : node server
    - Attendre quelques secondes : le message "Listening on port 8000" devrait apparaitre si le serveur s'est lancé correctement
    - Ouvrir un nouveau terminal
    - Executer la commande suivante dans le dossier "direct_brico_tech_test/frontend" : npm run start
    - Attendre quelques secondes jusqu'à la fin de la compilation : un nouvel onglet à l'adresse "http://localhost:3000" sera ouvert dans votre navigateur par défaut et un message de réussite apparaitra dans le terminal