// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import * as faker from 'faker'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  text = "Try press on a number"
  constructor() { }

  ngOnInit(): void {
    this.text = faker.lorem.words(30);
  }
 
  menuClick(event){
    document.querySelectorAll(".menu-btn").forEach(button => {
      button.classList.remove("active")
    })
    event.path.map(element => {
      if(element.classList == "menu-btn")
        element.classList.add("active")
    });

    console.dir(event)
    this.text = faker.lorem.words(30);
  }
}
