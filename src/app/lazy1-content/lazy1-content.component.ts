import { Component, OnInit } from '@angular/core';
import { BaseContentComponent } from '../base-content.component';

@Component({
  selector: 'app-lazy1-content',
  templateUrl: './lazy1-content.component.html',
  styleUrls: ['./lazy1-content.component.scss']
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
