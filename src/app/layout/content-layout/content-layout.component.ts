import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '../../services/layout.service'
import { trigger, state, style, animate,transition } from '@angular/animations'
import { withDebugTracing } from '@angular/router';

@Component({
  selector: 'app-content-layout',
  animations: [
    trigger('openleft', [
      state('open', style({
          width: '200px',
          position: 'relative',
          left: '0px'
        })),
      state('closed', style({
          width: '0px',
          position: 'relative',
          left: '-200px' 
        })),
      transition('open => closed', [
        animate('0.05s')
      ]),
      transition('closed => open', [
        animate('0.05s')
      ]),        
    ]),
    trigger('openright', [
      state('open', style({
          width: '200px',
          position: 'relative',
        })),
      state('closed', style({

          width: '0px',
          position: 'relative',
        })),
      transition('open => closed', [
        animate('0.05s')
      ]),
      transition('closed => open', [
        animate('0.05s')
      ]),        
    ]),
  ],
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'], 
  
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
