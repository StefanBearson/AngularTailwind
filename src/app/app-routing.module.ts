import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
      { path: 'info', loadChildren: () => import('./modules/info/info.module').then(m => m.InfoModule) },
      { path: 'grid', loadChildren: () => import('./modules/grid/grid.module').then(m => m.GridModule) },
      { path: 'chart', loadChildren: () => import('./modules/chart/chart.module').then(m => m.ChartModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
