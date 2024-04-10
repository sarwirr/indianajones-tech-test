import { Component, Input, SimpleChanges } from '@angular/core';
import { Trajet } from '../models/trajet';
import { TrajetInput } from '../types/type';
import { TrajetService } from '../services/trajet.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trajet-result',
  templateUrl: './trajet-result.component.html',
  styleUrls: ['./trajet-result.component.css']
})
export class TrajetResultComponent {
  @Input() trajetInput!: TrajetInput;
  public trajets: Trajet[] = []; 
  public isEmpty: boolean = true;

  constructor(
    public trajetService: TrajetService,
    private toastr: ToastrService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['trajetInput'] && this.trajetInput) {
      this.searchTrajet();
    }
  }
  
  searchTrajet(): void {
    console.log(this.trajetInput);

    if (!this.trajetInput) {
      this.toastr.error('TrajetInput pas definit', 'Error');
      return;
    }
    
 
    this.trajetService.searchBestTrajet(this.trajetInput.depart, this.trajetInput.destination, this.trajetInput.heureDepart).subscribe(
      (response: any) => {
        console.log(response);
        this.trajets = response.TrajetTrouve;
        this.isEmpty = this.trajets.length === 0; 
      },
      (error) => {
        console.error(error);
      this.toastr.error('Erreur est survenue', 'Error');
      }
    );
  } 
}
