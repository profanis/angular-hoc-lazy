import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html',
  styleUrls: ['./lazy-wrapper.component.scss']
})
export class LazyWrapperComponent  {
  @Input() componentType: 'lazy' | 'lazy1'
}
