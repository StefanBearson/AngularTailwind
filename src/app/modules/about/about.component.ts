import { Component, OnInit, OnChanges } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { Observable } from 'rxjs';

import notify from 'devextreme/ui/notify';
import hideToasts from 'devextreme/ui/toast/hide_toasts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges {
  leftOpen$!: Observable<boolean>;
  rightOpen$!: Observable<boolean>;
  toastIsVisible = false;
  message = 'testar';
  type = 'info';
  types: string[] = ['error', 'info', 'success', 'warning'];
  id = 1;

  constructor(private layoutService: LayoutService) {
  }

  ngOnInit(): void {
    this.leftOpen$ = this.layoutService.leftSidebarOpen$;
    this.rightOpen$ = this.layoutService.rightSidebarOpen$;
    this.layoutService.changePageName("About");
  }
  ngOnChanges(){

  }

  createToast(event: MouseEvent){
    this.type = 'info'
    this.message = 'Hello, this working! ' + event.clientY;
    this.toastIsVisible = true;
  }

  showToast(type: string){
    const position: any = "top left";
    const direction: any = "down-push"

    notify({
      message: `Toast ${this.id}`,
      height: 45,
      width: 150,
      minWidth: 150,
      type: type,
      displayTime: 3500,
      animation: {
        show: {
          type: 'fade', duration: 400, from: 0, to: 1,
        },
        hide: { 
          type: 'fade', duration: 40, to: 0 
        },
      },
    },
    { position, direction });
    this.id += 1;
  }
}
