import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxButtonModule, DxToastModule, DxButtonGroupModule } from 'devextreme-angular'

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    DxButtonModule,
    DxToastModule,
    DxButtonGroupModule,
  ]
})
export class AboutModule { }
