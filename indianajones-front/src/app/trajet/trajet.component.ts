import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../services/trajet.services';
import { Trajet } from '../models/trajet';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent implements OnInit {
  public trajets:Trajet[]=[]

  constructor(
    public trajetService: TrajetService
  ){}

  ngOnInit(): void {
    this.trajetService.fetchTrajets().subscribe(
      (response)=>{
        this.trajets = response;
        console.log(this.trajets)
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  onTrajetAdded(train: Trajet) {
    this.trajets.push(train);
  }
}