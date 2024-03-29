import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { BlogViewComponent } from './blog-view.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BlogViewComponent}
    ]),
    MarkdownModule.forChild()
  ],
  declarations: [BlogViewComponent]
})
export class BlogViewModule { }
