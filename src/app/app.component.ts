import { Component, ViewChild } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AllModules} from "@ag-grid-enterprise/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  private gridApi;
  private gridColumnApi;

  public modules = AllModules;

  private columnDefs;
  private defaultColumnDef;
  private rowData : any[];

}
