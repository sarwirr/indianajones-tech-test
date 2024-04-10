import { Component, Input } from '@angular/core';
import { Trajet } from 'src/app/models/trajet';

@Component({
  selector: 'app-trajet-result-table',
  templateUrl: './trajet-result-table.component.html',
  styleUrls: ['./trajet-result-table.component.css']
})
export class TrajetResultTableComponent {
  @Input() trajets!: Trajet[];
  public isEmpty: Boolean = false;
  
}
