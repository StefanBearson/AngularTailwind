import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '../modal/modal.service'
import { UserServiceService } from 'src/app/core/services/user-service.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = new FormControl('');
  id:string = "";

  constructor(private modalService: ModalService, private userService: UserServiceService) { }

  ngOnInit() {
    
  }



  login(){
    console.log(this.userName.value)
 
    this.userService.setUser(this.userName.value)
    this.modalService.close(this.id)
  }

  openModal(id: string) {
    this.id = id
    this.modalService.open(id);
}

  closeModal(id: string) {
    this.modalService.close(id);
}

}
