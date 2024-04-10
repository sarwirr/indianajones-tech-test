import { Component } from '@angular/core';
import { TrajetInput } from './types/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public indianaTrajet!: TrajetInput;

  onChangeInput(traject: TrajetInput) {
    this.indianaTrajet = traject;
  }
}
