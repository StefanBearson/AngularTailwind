import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
