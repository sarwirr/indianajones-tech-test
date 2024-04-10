import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trajet } from 'src/app/models/trajet';
@Injectable({
    providedIn: 'root'
  })
export class TrajetService {

private baseUrl:string = 'http://localhost:3000';
  constructor( private httpClient: HttpClient ) { }

  public fetchTrajets(): Observable<Trajet[]> {
        return this.httpClient.get<Trajet[]>(`${this.baseUrl}/trajet`);
    }

    public addTrajets(trajet: Trajet): Observable<Trajet> {   
        return this.httpClient.post<Trajet>(`${this.baseUrl}/trajet`, trajet);
    }

  public searchBestTrajet(depart: string, destination: string , dureeDepart: string): Observable<Trajet[]> {
    return this.httpClient.get<Trajet[]>(`${this.baseUrl}/trajet/gettrajet/${depart}/${destination}/${dureeDepart}`);
  }

}