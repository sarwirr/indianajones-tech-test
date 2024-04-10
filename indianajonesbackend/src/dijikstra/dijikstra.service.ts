import { Injectable } from '@nestjs/common';
import { Trajet } from 'src/trajet/entities/trajet.entity';
import { calculateArrivalTime, parseTime } from 'src/util/calcul';


@Injectable()
export class DijikstraService {
  constructor() {}
  // Transformer la liste des trajets en un graphe representant des connexions entre les villes

  graphNode(trajets: Trajet[]) { 
    const graph: { [depart: string]: { [destination: string]: number } } = {};
    for (const trajet of trajets) {
      graph[trajet.depart] = graph[trajet.depart] || {};
      graph[trajet.depart][trajet.destination] = calculateArrivalTime(
        trajet.heureDepart,
        trajet.duree,
      );
    }
    return graph;
  }

  // Trouver le plus court chemin entre deux villes en utilisant l'algorithme de Dijkstra

  shortestPath(trajets: Trajet[],villeDepart: string,villeDestination: string,heureDepart: string,
  ) {

    //PriorityQueue maintient les nœuds dans un ordre de priorité, 
    //où le noeud avec le temps estimé le plus court est toujours à la tête de la file d'attente.

    const nodesCostFromStart: { [node: string]: number } = {};
    const pq = new PriorityQueue();
    const path: string[] = [];
    const prevNodes = {};
    const graph = this.graphNode(trajets);
    const TrajetTrouve: Trajet[] = [];

    // Met un coût infini à toutes les villes
    for (const node in graph) {
      nodesCostFromStart[node] = Infinity;
      prevNodes[node] = null;
    }
    nodesCostFromStart[villeDepart] = parseTime(heureDepart);
    pq.enqueue(parseTime(heureDepart), villeDepart);

  
    while (!pq.isEmpty()) {
      const [currentTime, currentNode] = pq.dequeue()!;
      if (currentNode === villeDestination) {
        let node = villeDestination;

        //Implementation du Trajet trouve
        while (prevNodes[node]) {
          const trajet = trajets.find(
            (trajet) =>
              trajet.depart === prevNodes[node] &&
              trajet.destination === node &&
              calculateArrivalTime(trajet.heureDepart, trajet.duree) ===
                nodesCostFromStart[node],
          );
          if (trajet) {
            TrajetTrouve.unshift(trajet);
          }
          node = prevNodes[node];
        }
        break;
      }

      //Mise a jour du poids des noeuds voisins remplacer les poids infinis par les poids actuels
      for (const neighbor in graph[currentNode]) {
        const newCost = graph[currentNode][neighbor];
        
        const departureTimeCompatible = trajets.some(
          (trajet) =>
            trajet.depart === currentNode &&
            trajet.destination === neighbor &&
            parseTime(trajet.heureDepart) >= currentTime,
        );
        
        if (departureTimeCompatible) {
          if (!nodesCostFromStart[neighbor] && neighbor === villeDestination) {
            prevNodes[villeDestination] = currentNode;
            nodesCostFromStart[villeDestination] = newCost;
            pq.enqueue(newCost, villeDestination);
          }
          if (newCost < nodesCostFromStart[neighbor]) {
            nodesCostFromStart[neighbor] = newCost;
            prevNodes[neighbor] = currentNode;
            pq.enqueue(newCost, neighbor);
          }
        }
      }
    }
   
    if (TrajetTrouve.length === 0) {
      return { message: 'Aucun trajet trouvé' };
    } else {
      TrajetTrouve.map((trajet) => {
        const { depart, destination, heureDepart, duree } = trajet;
        const arrivalTime = calculateArrivalTime(heureDepart, duree); 
      });
    }
    

    return { TrajetTrouve };
  }
}

class PriorityQueue {
  elements: [number, string][];

  constructor() {
    this.elements = [];
  }

  enqueue(priority: number, element: string) {
    this.elements.push([priority, element]);
    this.elements.sort((a, b) => a[0] - b[0]);
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}