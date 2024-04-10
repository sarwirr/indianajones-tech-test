# indianajones-tech-test

## Algorithme utilisé
L'algorithme de **Bellman-Ford** est un algorithme utilisé pour trouver le plus court chemin entre un nœud source et tous les autres nœuds dans un graphe pondéré, même si le graphe contient des arêtes de poids négatif. L'idée principale derrière l'algorithme est de chercher à améliorer progressivement les estimations de distance entre le nœud source et les autres nœuds en considérant toutes les arêtes dans le graphe.

Dans l'implémentation, j'ai créer un graphe à partir de la liste de trajets, où les nœuds sont les villes et les arêtes représentent les trajets entre les villes. Les poids des arêtes seront la durée des trajets.
je commence par initialiser un dictionnaire des distances avec des valeurs infinies pour tous les nœuds, sauf pour le nœud source pour lequel la distance est mise à zéro. Ensuite, je parcours toutes les arêtes dans le graphe pour mettre à jour les distances en vérifiant si le chemin actuel offre une distance plus courte que celle précédemment enregistrée.

Je répète cette étape pour un nombre suffisant d'itérations pour garantir que les distances ont convergé vers les plus courts chemins. Enfin, je reconstruis le chemin le plus court à partir des distances et des prédécesseurs enregistrés pour chaque nœud. Cette approche garantit que même dans les graphes avec des poids négatifs, l'algorithme trouvera le plus court chemin, ou détectera la présence de cycles de poids négatif.
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
Cette approche m'a permis de bénéficier de la flexibilité et de la scalabilité de **MongoDB** tout en tirant parti des avantages de l'isolation des conteneurs pour simplifier le déploiement et la gestion des infrastructures. 


