import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


// HttpClient
import { HttpClientModule } from "@angular/common/http";

// ag-grid
import { AgGridModule } from "@ag-grid-community/angular";

//AgGridModule.withComponents([]) => the withComponent call is necessary for the grid to be able to use Angular Components as cells/headers

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,  AgGridModule.withComponents([]) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
