import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService, Posts } from 'src/app/services/data.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  // @Input() post!: Posts;
  markdown = '';

  postToBeCreated = new FormGroup({
    title: new FormControl(''),
    author: new FormControl('Stefan Björnson'),
    category: new FormControl(''),
    date: new FormControl(formatDate(Date.now(),'yyyy-MM-dd', 'en')),
    bannerImage: new FormControl(''),
    tags: new FormControl(''),
  })
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  test(){
    let data: Posts = {
      slug: this.postToBeCreated.value.title?.split(' ').join('-') || "",
      content: this.markdown,
      frontmatter: {
        title: this.postToBeCreated.value.title || "",
        author: this.postToBeCreated.value.author || "",
        category: this.postToBeCreated.value.category || "",
        date: this.postToBeCreated.value.date || "",
        bannerImage: this.postToBeCreated.value.bannerImage || "",
        tags: this.postToBeCreated.value.tags?.split(',') || []
      }
    };


    this.dataService.postBlogPost(data).subscribe();
  }
}
