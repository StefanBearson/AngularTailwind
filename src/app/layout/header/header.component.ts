import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '../../services/layout.service'


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [],
    standalone: false
})
export class HeaderComponent implements OnInit {
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
