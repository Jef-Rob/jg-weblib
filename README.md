### Pour build et run le projet via une image docker (http://localhost:3001/)

  

> `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true jg-weblib:dev`

  

### Sinon, on peut le lancer avec la commande (http://localhost:3000/):

  

> `npm run start`

# Résumé du projet

Le projet est en React/Redux/Scss.

Redux est implémenté selon le pattern Redux Ducks : https://github.com/erikras/ducks-modular-redux., Le SCSS est organisé en SCSS modules. Une librairie externe (Hammer.js) est utilisée pour détecter les événements de la gesture de la souris et des doigts.

  

### Consigne :

  
>La page doit contenir les composants suivants :

>• Un header

>• Le header doit toujours être visible en haut de la page peu importe l’état du scroll

>• Le header affiche uniquement un titre

>• Un footer

>• Le footer n’est visible que si l’utilisateur a ajouté un élément dans son panier

>• Au clic sur le footer, l’utilisateur reçoit un message (une alerte) et son panier est vidé

>• Lorsque le footer est visible, il doit être placé en bas de la page peu importe l’état du scroll

>• Une image type bannière

>• Une liste avec infinite-scroll et lazy loading

>• La liste doit être fluide

>• La liste doit se charger au fur et à fur mesure

>• Pour chaque élément de la liste on doit avoir :

>• Son titre

>• Sa description

>• Sa quantité dans le panier virtuel

>• Au clic sur l’élément on ajoute +1 en quantité

>• Au swipe de la gauche vers la droite, on doit afficher un bouton qui va permettre de

>supprimer toute la quantité de cet élément dans le panier

  

>Pour faire ce test, vous devez utiliser au minimum :

>- React

>- Redux

>- Sass

>Pour le reste, tout est libre. L’infinite scroll développé soi-même sera un plus.