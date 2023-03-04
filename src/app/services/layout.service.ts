import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private rightSidebarOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private leftSidebarOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  rightSidebarOpen$ = this.rightSidebarOpen.asObservable();
  leftSidebarOpen$ = this.leftSidebarOpen.asObservable();

  constructor() { }

  toggleRightSideBar(){
    this.rightSidebarOpen.next(!this.rightSidebarOpen.getValue());
  }

  toggleLeftSidebar(){
    this.leftSidebarOpen.next(!this.leftSidebarOpen.getValue());
  }
}
