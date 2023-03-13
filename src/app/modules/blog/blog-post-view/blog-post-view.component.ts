import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.css']
})
export class BlogPostViewComponent implements OnInit, OnDestroy {
  private sub!: Subscription
  post!: string;

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.post = './assets/blog/post/' + params['id'] + '.md';
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
