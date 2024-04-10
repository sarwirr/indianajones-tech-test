import { Component, EventEmitter, Output } from '@angular/core';
import { TrajetInput } from '../types/type';

@Component({
  selector: 'app-trajet-search',
  templateUrl: './trajet-search.component.html',
  styleUrls: ['./trajet-search.component.css']
})
export class TrajetSearchComponent {
  @Output() trajetEvent: EventEmitter<TrajetInput> = new EventEmitter<TrajetInput>();

  public trajetInput: TrajetInput = {
    depart: '',
    destination: '',
    heureDepart: ''
  };

  constructor() { }

  emitFormData(): void {
    
    if (this.trajetInput.depart && this.trajetInput.destination && this.trajetInput.heureDepart) {
      console.log(this.trajetInput);
      this.trajetEvent.emit(this.trajetInput);
    }
  }
}
