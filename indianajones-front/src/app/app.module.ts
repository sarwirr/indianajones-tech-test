import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrajetsListComponent } from './trajet/trajet-list/trajet-list.component';
import { TrajetFormComponent } from './trajet/trajet-form/trajet-form.component';
import { TrajetComponent } from './trajet/trajet.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { TrajetService } from './services/trajet.services';
import { TrajetSearchComponent } from './trajet-search/trajet-search.component';
import { TrajetResultComponent } from './trajet-result/trajet-result.component';
import { TrajetResultTableComponent } from './trajet-result/trajet-result-table/trajet-result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TrajetComponent,
    TrajetsListComponent,
    TrajetFormComponent,
    TrajetSearchComponent,
    TrajetResultComponent,
    TrajetResultTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    NgxMatTimepickerModule,
    
    
       

  ],
  providers: [TrajetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
