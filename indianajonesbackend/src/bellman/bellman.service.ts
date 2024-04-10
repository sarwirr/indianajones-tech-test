import { Injectable } from '@nestjs/common';
import { Trajet } from 'src/trajet/entities/trajet.entity';
import {convertToMinutes } from 'src/util/calcul';

@Injectable()
export class BellmanFordService {
  constructor() {}

  findShortestPath(
    listeTrajets: Trajet[],
    depart: string,
    destination: string,
    heureDepart: string,
  ): { chemin: string[]; tempsTotal: number } {
    // Créer un graphe représentant les connexions entre les villes à partir de la liste des trajets
    const graph = {};
    listeTrajets.forEach(trajet => {
      if (!graph[trajet.depart]) {
        graph[trajet.depart] = [];
      }
      graph[trajet.depart].push({
        destination: trajet.destination,
        heureDepart: convertToMinutes(trajet.heureDepart),
        duree: convertToMinutes(trajet.duree),
      });
    });

    // Initialiser les distances
    const distances = {};
    const predecesseurs = {};
    Object.keys(graph).forEach(ville => {
      distances[ville] = ville === depart ? convertToMinutes(heureDepart) : Infinity;
      predecesseurs[ville] = null;
    });

    // Appliquer l'algorithme de Bellman-Ford
    Object.keys(graph).forEach(_ => {
      Object.keys(graph).forEach(ville => {
        graph[ville].forEach(({ destination, heureDepart, duree }) => {
          if (distances[ville] + heureDepart < distances[destination]) {
            distances[destination] = distances[ville] + heureDepart;
            predecesseurs[destination] = ville;
          }
        });
      });
    });

    // Reconstruire le chemin le plus court
    const chemin = [destination];
    let current = destination;
    while (predecesseurs[current] !== null) {
      const villePrecedente = predecesseurs[current];
      chemin.unshift(villePrecedente);
      current = villePrecedente;
    }

    return { chemin, tempsTotal: distances[destination] };
  }
}
