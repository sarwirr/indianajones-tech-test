export function parseTime(timeStr: string): number {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  
  export function calculateArrivalTime(heureDepart: string,duree: string,heureDarrivee?: string,): number {
    const departureTimeInMinutes = parseTime(heureDepart);
    const travelTimeInMinutes = parseTime(duree);
  
    let arrivalTime;
    if (heureDarrivee) {
      arrivalTime = parseTime(heureDarrivee);
      arrivalTime = +travelTimeInMinutes;
    } else {
      arrivalTime = departureTimeInMinutes + travelTimeInMinutes;
    }
  
    return arrivalTime;
  }