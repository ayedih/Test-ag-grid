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


  printState() {

        var colState = this.gridColumnApi.getColumnState();//Gets the state of the columns. Typically used when saving column state.
        var groupState = this.gridColumnApi.getColumnGroupState();//Gets the state of the column groups. Typically used when saving column group state.
        var sortState = this.gridApi.getSortModel();
        var filterState = this.gridApi.getFilterModel();

        console.log("******************************");
        console.log("colState: ", colState);
        console.log("groupState: ", groupState);
        console.log("sortState: ", sortState);
        console.log("filterState: ", filterState);
        console.log("******************************");
  }


  saveState() {

    window.colState = this.gridColumnApi.getColumnState();
    window.grouState = this.gridColumnApi.getColumnGroupState();
    window.sortState = this.gridColumnApi.getSortModel();
    window.filterState = this.gridColumnApi.getFilterModel();
    
    console.log("column state saved");
  }

  restoreState() {

    if (!window.colState) {
      console.log("no columns state to restore by, you must save state first");
      return;
    }

    this.gridColumnApi.setColumnState(window.colState);
    this.gridColumnApi.setColumnGroupState(window.groupState);
    this.gridApi.setSortModel(window.sortModel);
    this.gridApi.setFilterModel(window.filterState);

    console.log("column state restored");
  }


  resetState() {
    this.gridColumnApi.resetColumnState();
    this.gridColumnApi.resetColumnGroupstate();
    this.gridApi.setSortModel(null);
    this.gridApi.setFilterModel(null);

  }

  showAthlete(show) {
    this.gridColumnApi.setColumnVisible("athlete", show);
  }

   showMedals(show) {
    this.gridColumnApi.setColumnsVisible(["total", "gold", "silver", "bronze"], show);
  }

  pinAthlete(pin) {
    this.gridColumnApi.setColumnPinned("athlete", pin);
  }

  pinAge(pin) {
        this.gridColumnApi.setColumnPinned("age", pin);

  }

  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http.get(  "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json").subscribe(date => {
      this.rowData = data;
    });
  }
 }
