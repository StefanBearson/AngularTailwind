import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService, Posts } from 'src/app/services/data.service';


@Component({
    selector: 'app-blog-post-view',
    templateUrl: './blog-post-view.component.html',
    styleUrls: ['./blog-post-view.component.css'],
    standalone: false
})
export class BlogPostViewComponent implements OnInit, OnDestroy {
  private sub!: Subscription
  post!: Posts;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.sub = this.route.params.subscribe(params => {
      this.dataService
        .getBlogPost(params.id)
        .subscribe(data => (this.post = data));
    })
  }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   this.dataService
    //     .getBlogPost(params.id)
    //     .subscribe(data => (this.post = data));
    // })
    console.log("object", this.post);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
