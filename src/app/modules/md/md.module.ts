import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import { MdComponent } from './md.component';
import { MdRoutingModule } from './md.routing';

@NgModule({ declarations: [MdComponent], imports: [CommonModule,
        MdRoutingModule,
        MarkdownModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class MdModule { }
