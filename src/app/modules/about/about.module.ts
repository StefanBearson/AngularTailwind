import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxButtonModule, DxToastModule, DxButtonGroupModule } from 'devextreme-angular'
import { MarkdownModule } from 'ngx-markdown';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AboutRoutingModule,
    DxButtonModule,
    DxToastModule,
    DxButtonGroupModule,
    MarkdownModule.forChild()
  ]
})
export class AboutModule { }
