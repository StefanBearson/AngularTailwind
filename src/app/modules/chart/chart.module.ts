import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartRoutingModule } from './chart.routing';
import { DxChartModule } from 'devextreme-angular';
@NgModule({
  imports: [
    CommonModule,
    ChartRoutingModule,
    DxChartModule
  ],
  declarations: [ChartComponent]
})
export class ChartModule { }
