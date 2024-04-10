# indianajones-tech-test

## Algorithme utilisé
Ce code implémente l'algorithme de Dijkstra pour trouver le chemin le plus court entre deux villes dans un réseau de trajets ferroviaires.
J'ai pris comme nodes les villes de depart et de destination et leurs poids la duree du trajet.

![image](https://miro.medium.com/v2/resize:fit:566/0*LMTm4lzv_xuTGq8J.png)

**createGraph(trajets: Trajet[]):** 
Cette fonction prend une liste de trajets en entrée et crée un graphe représentant les connexions entre les villes. Le graphe est représenté sous forme d'un dictionnaire où les clés sont les villes de départ et les valeurs sont à leur tour des dictionnaires où les clés sont les villes de destination et les valeurs sont les temps d'arrivée.

**findShortestPath(trajets: Trajet[], villeDepart: string, villeDestination: string, heureDepart: string):** 
Cette fonction prend en entrée les trajets, la ville de départ, la ville de destination et l'heure de départ. Elle implémente l'algorithme de Dijkstra pour trouver le chemin le plus court entre la ville de départ et la ville de destination. L'algorithme utilise une file de priorité (PriorityQueue) pour sélectionner le nœud suivant à explorer en fonction du temps estimé pour atteindre ce nœud. Elle explore ensuite les voisins de chaque nœud, met à jour les coûts et les nœuds précédents si un chemin plus court est trouvé.

## Frameworks

### Frontend
Pour la Partie frontend j'ai utilise **Angular** comme framework écrit en TypeScript, qui est une surcouche de JavaScript offrant un typage statique. Cela améliore la lisibilité du code, réduit les erreurs et offre une meilleure maintenance.

Angular propose un large éventail de fonctionnalités intégrées telles que le routage, la gestion des formulaires, les requêtes HTTP, la gestion de l'état global avec RxJS, etc., ce qui permet de développer des applications riches et complexes avec une base solide.

j'ai choisi d'utiliser **Angular Material** et **Bootstrap** pour le stylage des composants.
(https://material.angular.io/) (https://ng-bootstrap.github.io/#/getting-started)

Ces deux bibliothèques offrent une variété de composants prêts à l'emploi avec un design cohérent et une réactivité intégrée.
De plus,l'intégration de Angular Material avec le framework Angular est facile j'ai pu concentrer mes efforts sur la logique métier de mon application tout en garantissant une expérience utilisateur de qualité.

### Backend 

j'ai travaillé sur le développement du backend en utilisant le framework **NestJS**. J'ai choisi NestJS pour sa structure modulaire et sa capacité à créer des applications robustes et évolutives grâce à l'utilisation de **TypeScript**. Pour la gestion des données, j'ai opté pour **MongoDB** en tant que base de données, en l'intégrant dans un conteneur Docker pour faciliter le déploiement et la gestion de la base de données. 
Cette approche m'a permis de bénéficier de la flexibilité et de la scalabilité de **MongoDB** tout en tirant parti des avantages de l'isolation des conteneurs pour simplifier le déploiement et la gestion des infrastructures. En travaillant sur le backend, j'ai veillé à concevoir une architecture propre et bien organisée, en utilisant les fonctionnalités de NestJS telles que les modules, les contrôleurs et les services pour assurer une maintenance facile et une extensibilité future du système.


