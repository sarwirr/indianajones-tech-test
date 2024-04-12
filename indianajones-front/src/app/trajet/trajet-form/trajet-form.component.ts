import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Trajet } from 'src/app/models/trajet';
import { TrajetService } from 'src/app/services/trajet.services';
import { TrajetInformation } from 'src/app/types/type';

@Component({
  selector: 'app-trajet-form',
  templateUrl: './trajet-form.component.html',
  styleUrls: ['./trajet-form.component.css'],
})
export class TrajetFormComponent {
  @Output() trajetAdded: EventEmitter<Trajet> = new EventEmitter<Trajet>();
  errorMessage: string = '';

  public trajet: Trajet = {
    depart: '',
    destination: '',
    heureDepart: '',
    duree: '',
  };

  constructor(
    private trajetService: TrajetService,
    private toastr: ToastrService
  ) {}

  onSubmit(form: NgForm) {
    // this.updateErrorMessage();
    if (form.valid) {
      // Get the selected time values
      const departureTime = this.trajet.heureDepart;
      const travelTime = this.trajet.duree;

      const newTrajet: TrajetInformation = {
        depart: this.trajet.depart,
        destination: this.trajet.destination,
        heureDepart: departureTime,
        duree: travelTime,
      };

      

      this.trajetService.addTrajets(newTrajet).subscribe({
        next: (response: Trajet) => {
          this.toastr.success('Train ajouté avec succès');
          form.resetForm();
          this.trajetAdded.emit(response);
        },
        error: (error) => {
          this.toastr.error(error.message);
        }
      });
    }
  }

  // Update error message for missing fields
  // private updateErrorMessage() {
  //   this.errorMessage = '';

  //   if (!this.trajet.depart) {
  //     this.errorMessage += 'Ville de départ est requise. ';
  //   }

  //   if (!this.trajet.destination) {
  //     this.errorMessage += 'Ville d\'arrivée est requise. ';
  //   }

  //   if (!this.trajet.heureDepart) {
  //     this.errorMessage += 'Heure de départ est requise. ';
  //   }

  //   if (!this.trajet.duree) {
  //     this.errorMessage += 'Durée de trajet est requise. ';
  //   }
  // }
}
