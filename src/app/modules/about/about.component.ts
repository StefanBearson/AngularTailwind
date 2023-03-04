import { Component, OnInit, OnChanges } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges {
  leftOpen$!: Observable<boolean>;
  rightOpen$!: Observable<boolean>;

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit(): void {
    this.leftOpen$ = this.layoutService.leftSidebarOpen$;
    this.rightOpen$ = this.layoutService.rightSidebarOpen$;
  }
  ngOnChanges(){

  }
}
