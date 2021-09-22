// @ts-nocheck
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  darkmode = false;
  toggledarkmodeText = "Go Dark..."

  toggleMenu() {
      document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        dropdown.classList.remove("active")
      })
  }

  toggleDarkmode() {
    console.log("runs")
    if(!this.darkmode){
      console.log("dark")
      document.documentElement.classList.add('dark')
      this.toggledarkmodeText = "Bring me the light!";
      this.darkmode = true
    }else{
      console.log("light")
      document.documentElement.classList.remove('dark')
      this.toggledarkmodeText = "Go Dark...";
      this.darkmode = false
    }
  }
  constructor() {
    
   }

  ngOnInit() {

    document.addEventListener("click", e => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]")
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    
      let currentDropdown: Element
      if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
      }
    
      document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
      })
    })
  }

}
