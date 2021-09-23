// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuClick(event){
    document.querySelectorAll(".menu-btn").forEach(button => {
      button.classList.remove("active")
    })
    event.path.map(element => {
      console.log(element.classList)
      if(element.classList == "menu-btn")
        element.classList.add("active")
    });
  }
}
