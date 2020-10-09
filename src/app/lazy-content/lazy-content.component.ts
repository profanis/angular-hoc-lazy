import { Component } from '@angular/core';
import { BaseContentComponent } from '../base-content.component';

@Component({
  selector: 'app-lazy-content',
  templateUrl: './lazy-content.component.html',
  styleUrls: ['./lazy-content.component.scss']
})
export class LazyContentComponent extends BaseContentComponent {

  constructor() {
    super()
  }

  onLazyWrapperClick() {
    console.log('a click from wrapper invoked a method on lazy-content.component')
  }

}
