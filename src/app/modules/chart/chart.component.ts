import { Component, OnInit } from '@angular/core';
import { DataService, ComplaintsWithPercent } from 'src/app/services/data.service'
import { LayoutService } from 'src/app/services/layout.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  dataSource!: ComplaintsWithPercent[];


  constructor(private dataService: DataService, private layoutService: LayoutService) { 
    this.dataSource = dataService.getComplaintsData();
  }

  ngOnInit() {
    this.layoutService.changePageName('chart');
  }

  // customizeTooltip = (info: any) => ({
  //   html: `<div><div class='tooltip-header'>${
  //     info.argumentText}</div>`
  //               + '<div class=\'tooltip-body\'><div class=\'series-name\'>'
  //               + `<span class='top-series-name'>${info.points[0].seriesName}</span>`
  //               + ': </div><div class=\'value-text\'>'
  //               + `<span class='top-series-value'>${info.points[0].valueText}</span>`
  //               + '</div><div class=\'series-name\'>'
  //               + `<span class='bottom-series-name'>${info.points[1].seriesName}</span>`
  //               + ': </div><div class=\'value-text\'>'
  //               + `<span class='bottom-series-value'>${info.points[1].valueText}</span>`
  //               + '% </div></div></div>',
  // });
  
  customizeTooltip = (info: any) => ({
    html: '<app-tooltip></app-tooltip>hej',
  });

  customizeLabelText = (info: any) => `${info.valueText}%`;
}
