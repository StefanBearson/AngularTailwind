import { Component, Input, OnInit } from '@angular/core';
import { DataService, Posts } from 'src/app/services/data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  @Input() post!: Posts;
  
  fakedata: Posts = {
    slug: "detta är från Angular",
    content: "this is content! more text",
    frontmatter: {
      title: "title",
      author: "author",
      category: "catagory",
      date: "2023-01-01",
      bannerImage: "image.img",
      tags: ["angular", "tips", "how how"]
    }
  };
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }


  test(){
    console.log("hello")



    this.dataService.postBlogPost(this.fakedata).subscribe();
  }
}
