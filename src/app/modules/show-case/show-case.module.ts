import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCaseRoutingModule } from './show-case-routing.module';
import { ShowCaseComponent } from './show-case.component';

import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    ShowCaseComponent, ButtonsComponent
  ],
  imports: [
    CommonModule,
    ShowCaseRoutingModule
  ]
})
export class ShowCaseModule { }
