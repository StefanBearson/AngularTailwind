import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MdComponent } from './md.component';

const routes: Routes = [
  { path: '', component: MdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdRoutingModule { }
