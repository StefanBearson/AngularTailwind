import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService, Posts,PostRes} from 'src/app/services/data.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  posts!: Posts[];
  testar!: string[];


  constructor(private dataService: DataService) {
    this.getPosts();

  }

  ngOnInit() {
    console.log('posts:'+ this.posts);
  }

  getPosts(): void {
    this.dataService
      .getAllBlogs()
      .subscribe(
        posts => (this.posts = posts)
      );
  }
}
