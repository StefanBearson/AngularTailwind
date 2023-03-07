import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridRoutingModule } from './grid-routing.module'
import { DxDataGridModule } from 'devextreme-angular';
@NgModule({
  imports: [
    CommonModule,
    GridRoutingModule,
    DxDataGridModule
  ],
  declarations: [GridComponent]
})
export class GridModule { }
