import { Component, HostListener, OnInit } from '@angular/core';
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
          left: '-200px',
          display: 'none' 
        })),
      transition('open => closed', [
        animate('0.05s')
      ]),
      transition('closed => open', [
        animate('0.05s')
      ]),        
    ]),
    trigger('openleftsmall', [
      state('open', style({
        })),
      state('closed', style({
        display: 'none'
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
    trigger('openrightsmall', [
      state('open', style({
        })),
      state('closed', style({
          display: 'none'
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
  isSmallScr!: boolean  

  @HostListener('window:resize', ['$event'])
  
  onResize(event: any) {
    if(event.target.innerWidth < 768) {
        this.isSmallScr = true;
        return
      }
    this.isSmallScr = false;
  }
  
  constructor(private layoutService: LayoutService) {
    this.isSmallScr = false;
  }

  smallScrMenuClick(event:any) {
    //works for now! ;) 
    if(event.target.localName != "div") {
      this.layoutService.closeAllSidebars();
    }
  }

  ngOnInit() {
    this.leftOpen$ = this.layoutService.leftSidebarOpen$;
    this.rightOpen$ = this.layoutService.rightSidebarOpen$;
  }
}
