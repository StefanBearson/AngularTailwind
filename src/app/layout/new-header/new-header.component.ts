import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service'


@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css'],
  providers: [ ]
})
export class NewHeaderComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  public toggleLeftSidebar(){
    this.layoutService.toggleLeftSidebar();
  }

  public toggleRightSidebar(){
    this.layoutService.toggleRightSideBar();
  }

}
