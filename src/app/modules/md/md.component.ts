import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.css']
})
export class MdComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
