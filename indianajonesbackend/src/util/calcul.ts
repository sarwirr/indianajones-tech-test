export function convertToMinutes(timeStr: string): number {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  
  export function calculateArrivalTime(heureDepart: string,duree: string,heureDarrivee?: string,): number {
    const departureTimeInMinutes = convertToMinutes(heureDepart);
    const travelTimeInMinutes = convertToMinutes(duree);
  
    let arrivalTime;
    if (heureDarrivee) {
      arrivalTime = convertToMinutes(heureDarrivee);
      arrivalTime = +travelTimeInMinutes;
    } else {
      arrivalTime = departureTimeInMinutes + travelTimeInMinutes;
    }
  
    return arrivalTime;
  }