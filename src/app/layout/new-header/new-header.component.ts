import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '../../services/layout.service'


@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css'],
  providers: [ ]
})
export class NewHeaderComponent implements OnInit {
  title$!: Observable<string>;
  pageName$!: Observable<string>;
  pageDescription$!: Observable<string>;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.title$ = this.layoutService.title$;
    this.pageName$ = this.layoutService.pageName$;
    this.pageDescription$ = this.layoutService.pageDescription$;
  }

  public toggleLeftSidebar(){
    this.layoutService.toggleLeftSidebar();
  }

  public toggleRightSidebar(){
    this.layoutService.toggleRightSideBar();
  }

}

// leftOpen$!: Observable<boolean>;
// rightOpen$!: Observable<boolean>;
// constructor(private layoutService: LayoutService) { }

// ngOnInit() {
//   this.leftOpen$ = this.layoutService.leftSidebarOpen$;
//   this.rightOpen$ = this.layoutService.rightSidebarOpen$;
// }