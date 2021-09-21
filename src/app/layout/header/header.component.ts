// @ts-nocheck
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
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
