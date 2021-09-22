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

  toggleMenu(event) {
      document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        dropdown.classList.remove("active")
      })

      document.querySelectorAll("[link-button].active").forEach(link => {
        link.classList.remove("active")
      })

      event.path.map(element => {
        if(element.nodeName == "A")
          element.classList.add("active")
      });
  }

  toggleDarkmode() {
    if(!this.darkmode){
      document.documentElement.classList.add('dark')
      this.toggledarkmodeText = "Bring me the light!";
      this.darkmode = true
    }else{
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
