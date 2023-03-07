import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import DataSource from "devextreme/data/data_source";
import "devextreme/data/odata/store";
// import {take} from "rxjs";
import { DataService } from 'src/app/services/data.service';
import { Cool } from 'src/app/models/cool.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  dataSource: DataSource | null = null;

  constructor(private layoutService: LayoutService, private dataService: DataService) { 
    this.getData();
  }

  ngOnInit() {
    this.layoutService.changePageName("Grid")
    this.getData();
  }
  getData() {
    this.dataService.getData()
      .subscribe({
        next: (value: Cool[]) => {
          this.dataSource = new DataSource(value);
          console.log("runs")
        }
      })
  }

}
