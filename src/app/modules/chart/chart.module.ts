import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { ChartRoutingModule } from './chart.routing';
import { DxChartModule, DxTooltipModule, DxTemplateModule } from 'devextreme-angular';

import { TooltipComponent } from './tooltip/tooltip.component'
@NgModule({
  imports: [
    CommonModule,
    ChartRoutingModule,
    DxChartModule, DxTooltipModule, DxTemplateModule
  ],
  declarations: [ChartComponent, TooltipComponent]
})
export class ChartModule { }
