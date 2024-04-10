import { Component, Input } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Trajet } from 'src/app/models/trajet';


@Component({
  selector: 'app-trajet-list',
  templateUrl: './trajet-list.component.html',
  styleUrls: ['./trajet-list.component.css'],
  
})
export class TrajetsListComponent {
  @Input() trajets!: Trajet[];
  dataSource!: MatTableDataSource<Trajet>;
  displayedColumns: string[] = ['depart', 'destination', 'heureDepart', 'duree'];
  
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.trajets);
  }
}
