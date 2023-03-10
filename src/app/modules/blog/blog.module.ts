import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { BlogViewModule } from './blog-view/blog-view.module';
import { BlogPostViewModule } from './blog-post-view/blog-post-view.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', loadChildren: () => import('./blog-view/blog-view.module').then(m => m.BlogViewModule)},
      {path: 'post', loadChildren: () => import('./blog-post-view/blog-post-view.module').then(m => m.BlogPostViewModule)}
    ]),
  ],
})
export class BlogModule { }
