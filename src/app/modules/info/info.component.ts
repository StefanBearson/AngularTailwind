import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
    standalone: false
})
export class InfoComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.changePageName('Info');
  }

}
