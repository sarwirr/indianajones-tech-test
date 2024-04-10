import { Injectable } from '@nestjs/common';
import { Trajet } from 'src/trajet/entities/trajet.entity';

@Injectable()
export class BellmanFordService {
  constructor() {}

  async findShortestPath(trajets: Trajet[], depart: string, destination: string, heureDepart: string): Promise<Trajet[]> {
    // Convert heureDepart to minutes
    const heureDepartMinutes = this.convertToMinutes(heureDepart);

    // Initialize distances and predecessors
    const distances: { [key: string]: number } = {};
    const predecesseurs: { [key: string]: Trajet | null } = {};

    // Set initial distances
    for (const trajet of trajets) {
      distances[trajet.depart] = trajet.depart === depart ? 0 : Infinity;
      distances[trajet.destination] = Infinity;
    }

    // Relax edges repeatedly
    for (let i = 0; i < trajets.length - 1; i++) {
      for (const trajet of trajets) {
        const departTime = this.convertToMinutes(trajet.heureDepart);
        const dureeMinutes = this.convertToMinutes(trajet.duree);
        const arrivalTime = departTime + dureeMinutes;

        if (arrivalTime >= distances[trajet.destination] || departTime < distances[trajet.depart])
          continue;

        if (arrivalTime < distances[trajet.destination]) {
          distances[trajet.destination] = arrivalTime;
          predecesseurs[trajet.destination] = trajet;
        }
      }
    }

    // Reconstruct shortest path
    const shortestPath: Trajet[] = [];
    let currentCity = destination;
    while (currentCity !== depart) {
      const predecessorTrajet = predecesseurs[currentCity];
      if (!predecessorTrajet) {
        return []; // No path found
      }
      shortestPath.unshift(predecessorTrajet);
      currentCity = predecessorTrajet.depart;
    }

    return shortestPath;
}


  private convertToMinutes(timeStr: string): number {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }
}
