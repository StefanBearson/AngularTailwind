import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostViewComponent } from './blog-post-view.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BlogPostViewComponent},
      { path: ':id', component: BlogPostViewComponent, pathMatch: 'full'}
    ]),
    MarkdownModule.forChild()
  ],
  declarations: [BlogPostViewComponent],
})
export class BlogPostViewModule { }
