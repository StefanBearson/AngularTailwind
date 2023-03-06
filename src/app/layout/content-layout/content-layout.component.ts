import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '../../services/layout.service'

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  leftOpen$!: Observable<boolean>;
  rightOpen$!: Observable<boolean>;
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.leftOpen$ = this.layoutService.leftSidebarOpen$;
    this.rightOpen$ = this.layoutService.rightSidebarOpen$;
  }
}
