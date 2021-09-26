import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
// user:string = "No User active";


constructor() {
  this.user.next("no active user")
 }

private user: BehaviorSubject<string> = new BehaviorSubject<string>("test");



setUser(user:string): void {
  // this.user = user
  this.user.next(user);
  this.getUser();
}

getUser():Observable<string> {
  return this.user;
}

}
