import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
// open close sidebars
  private rightSidebarOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private leftSidebarOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  rightSidebarOpen$ = this.rightSidebarOpen.asObservable();
  leftSidebarOpen$ = this.leftSidebarOpen.asObservable();
// header text
  title$: BehaviorSubject<string> = new BehaviorSubject<string>("Super Site");
  pageName$: BehaviorSubject<string> = new BehaviorSubject<string>("name of the current page");
  pageDescription$: BehaviorSubject<string> = new BehaviorSubject<string>("More information about the current page!");

  constructor() { }

  toggleRightSideBar(){
    this.rightSidebarOpen.next(!this.rightSidebarOpen.getValue());
  }

  toggleLeftSidebar(){
    this.leftSidebarOpen.next(!this.leftSidebarOpen.getValue());
  }

  closeAllSidebars(){
    this.leftSidebarOpen.next(false);
    this.rightSidebarOpen.next(false);
  }

  changeTitle(title: string){
    this.title$.next(title);
  } 
  changePageName(name: string){
    this.pageName$.next(name);
  }
  changepageDescription(description: string){
    this.pageDescription$.next(description);
  }
}
