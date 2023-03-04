import { Component, OnInit, OnChanges } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges {
  leftOpen$: Observable<boolean> = new Observable<boolean>
  rightOpen$: Observable<boolean> = new Observable<boolean>

  constructor(private layoutService: LayoutService) { 
  }

  ngOnInit(): void {
    this.checkSidebars();
  }
  ngOnChanges(){
    this.checkSidebars();
  }
  
  checkSidebars(): void {
    // this.layoutService.leftSidebarIsOpen().subscribe(open => this.leftOpen$ = Observable<Boolean>(open.valueOf));
    // this.layoutService.rightSidebarIsOpen().subscribe(open => this.rightOpen$.subscribe = open);
    

  }

}
