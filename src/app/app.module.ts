import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { OptionsComponent } from './layout/options/options.component'
import { MenuComponent } from './layout/menu/menu.component'
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ContentLayoutComponent, OptionsComponent, MenuComponent, FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
