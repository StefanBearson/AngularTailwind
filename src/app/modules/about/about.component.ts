import { Component, OnInit, OnChanges } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { DataService, Alignment } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

import notify from 'devextreme/ui/notify';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges {
  leftOpen$!: Observable<boolean>;
  rightOpen$!: Observable<boolean>;
  toastIsVisible = false;
  message = 'testar';
  type = 'info';
  types: string[] = ['error', 'info', 'success', 'warning'];
  id = 1;
//buttongroup
  alignments!: Alignment[];
// markdown
  markdown = `## Markdown __rulez__!
---

# Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
  - Unordered list
  - Another unordered bullet

### Blockquote
> Blockquote to the max`;

  constructor(private layoutService: LayoutService, private dataService: DataService) {
    this.alignments = dataService.getAlignments();
  }

  ngOnInit(): void {
    this.leftOpen$ = this.layoutService.leftSidebarOpen$;
    this.rightOpen$ = this.layoutService.rightSidebarOpen$;
    this.layoutService.changePageName("About");
  }
  ngOnChanges(){

  }

  createToast(event: MouseEvent){
    this.type = 'info'
    this.message = 'Hello, this working! ' + event.clientY;
    this.toastIsVisible = true;
  }

  showToast(type: string){
    const position: any = "top left";
    const direction: any = "down-push"
    const content: any =  "<div>hej hå </div>"
    notify({
      message: `Toast ${this.id}`,
      height: 45,
      width: 150,
      minWidth: 150,
      type: type,
      displayTime: 3500,
      opacity: 0.5,
      animation: {
        show: {
          type: 'fade', duration: 400, from: 0, to: 1,
        },
        hide: { 
          type: 'fade', duration: 40, to: 0 
        },
      },
    },
    { position, direction });
    this.id += 1;
  }

  itemClick(e:any) {
    notify({ message: `The "${e.itemData.hint}" button was clicked`, width: 320 }, 'success', 1000);
  }
}
