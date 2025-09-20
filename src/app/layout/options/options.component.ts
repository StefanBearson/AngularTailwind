import { Component, OnInit } from '@angular/core';
import themes from 'devextreme/ui/themes'
@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css'],
    standalone: false
})
export class OptionsComponent implements OnInit {
  darkmode = false;
  constructor() { }

  ngOnInit() {
  }
  toggleDarkmode() {
    if(!this.darkmode){
      themes.current("generic.dark")
      document.documentElement.classList.add('dark')
      this.darkmode = true
    }else{
      themes.current("generic.light")
      document.documentElement.classList.remove('dark')
      this.darkmode = false
    }
  }
}
