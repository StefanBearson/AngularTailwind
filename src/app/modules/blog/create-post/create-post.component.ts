import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService, Posts } from 'src/app/services/data.service';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css'],
    standalone: false
})
export class CreatePostComponent implements OnInit {
  // @Input() post!: Posts;
  private file!: File;
  markdown = '';
  

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    if(file)
      this.file = file;
  }

  postToBeCreated = new FormGroup({
    title: new FormControl(''),
    author: new FormControl('Stefan Björnson'),
    category: new FormControl(''),
    date: new FormControl(formatDate(Date.now(),'yyyy-MM-dd', 'en')),
    bannerImage: new FormControl(''),
    tags: new FormControl(''),
    image: new FormControl(null),
  })
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  savePost(){
    let data: Posts = {
      slug: this.postToBeCreated.value.title?.split(' ').join('-') || "",
      content: this.markdown,
      frontmatter: {
        title: this.postToBeCreated.value.title || "",
        author: this.postToBeCreated.value.author || "",
        category: this.postToBeCreated.value.category || "",
        date: this.postToBeCreated.value.date || "",
        bannerImage: this.file.name || "",
        tags: this.postToBeCreated.value.tags?.split(',') || []
      }
    };

    // this.file = this.postToBeCreated.value.image
    console.log("image: ", this.file?.arrayBuffer);
    this.dataService.postImage(this.file).subscribe();

    this.dataService.postBlogPost(data).subscribe();
  }

  
}
