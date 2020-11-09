import { Component } from '@angular/core';
import { BaseContentComponent } from '../base-content.component';

@Component({
  selector: 'app-lazy-content',
  template: `
    This the content of the <span style="color: red">Lazy Load Component</span>
  `,
})
export class LazyContentComponent extends BaseContentComponent {

  constructor() {
    super()
  }

  onLazyWrapperClick() {
    console.log('a click from wrapper invoked a method on lazy-content.component')
  }

}
