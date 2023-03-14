import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CreatePostComponent } from './create-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CreatePostComponent}
    ]),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MarkdownModule
  ],
  declarations: [CreatePostComponent]
})
export class CreatePostModule { }
