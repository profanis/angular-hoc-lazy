import { Component, OnInit } from '@angular/core';
import { BaseContentComponent } from '../base-content.component';

@Component({
  selector: 'app-lazy1-content',
  template: `
    This the content of the <span style="color: green">Lazy1 Load Component</span>
  `,
})
export class Lazy1ContentComponent extends BaseContentComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

  onLazyWrapperClick() {
    console.log('a click from wrapper invoked a method on lazy1-content.component')
  }

}
