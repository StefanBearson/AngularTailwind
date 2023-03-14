import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CreatePostComponent } from './create-post.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CreatePostComponent}
    ]),
    CommonModule
  ],
  declarations: [CreatePostComponent]
})
export class CreatePostModule { }
