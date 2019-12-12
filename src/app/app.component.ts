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
  private defaultColDef;
  private rowData : any[];

  constructor(private http:HttpClient){

     this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
      },
      {
        headerName: "Age",
        field: "age",
        width: 90
      },
      {
        headerName: "Country",
        field: "country",
        width: 120,
        enableRowGroup: true
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
      },
      {
        headerName: "Date",
        field: "date",
        width: 110,
       /*  comparator: dateComparator */
      },
      {
        headerName: "Medals",
        children: [
          {
            headerName: "Total",
            field: "total",
            columnGroupShow: "closed",
            width: 125
          },
          {
            headerName: "Gold",
            field: "gold",
            columnGroupShow: "open",
            width: 125
          },
          {
            headerName: "Silver",
            field: "silver",
            columnGroupShow: "open",
            width: 125
          },
          {
            headerName: "Bronze",
            field: "bronze",
            columnGroupShow: "open",
            width: 125
          }
        ]
      }
    ];

      this.defaultColDef = {
      sortable: true,
      resizable: true
    };
  }

}
