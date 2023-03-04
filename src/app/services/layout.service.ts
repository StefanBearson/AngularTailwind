import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  
  private rightSidebarOpen: boolean;
  private leftSidebarOpen: boolean;


  constructor() {
    this.rightSidebarOpen = false;
    this.leftSidebarOpen = false;
  }

  toggleRightSideBar(){
    console.log("R Runs, ", this.rightSidebarOpen);
    this.rightSidebarOpen = !this.rightSidebarOpen;
  }

  toggleLeftSidebar(){
    console.log("L Runs, ", this.leftSidebarOpen);
    this.leftSidebarOpen = !this.leftSidebarOpen;
  }

  rightSidebarIsOpen(): Observable<boolean> {
    return of(this.rightSidebarOpen);
  }

  leftSidebarIsOpen(): Observable<boolean> {
    return of(this.leftSidebarOpen);
  }

}
