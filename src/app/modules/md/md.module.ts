import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import { MdComponent } from './md.component';
import { MdRoutingModule } from './md.routing';

@NgModule({
  imports: [
    CommonModule, 
    MdRoutingModule, 
    MarkdownModule, 
    FormsModule, 
    HttpClientModule
  ],
  declarations: [MdComponent]
})
export class MdModule { }
