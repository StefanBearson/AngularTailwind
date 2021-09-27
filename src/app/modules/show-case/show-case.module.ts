import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCaseRoutingModule } from './show-case-routing.module';
import { ShowCaseComponent } from './show-case.component';

import { ButtonsComponent } from './buttons/buttons.component';
import { TabelsComponent } from './tabels/tabels.component';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    ShowCaseComponent, ButtonsComponent, TabelsComponent, FormsComponent
  ],
  imports: [
    CommonModule,
    ShowCaseRoutingModule
  ]
})
export class ShowCaseModule { }
