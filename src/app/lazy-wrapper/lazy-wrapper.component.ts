import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html',
  styleUrls: ['./lazy-wrapper.component.scss'],
  providers: [TitleCasePipe]
})
export class LazyWrapperComponent implements OnChanges  {
  @Input() componentType: 'lazy' | 'lazy1'
  component: any

  constructor(private titleCasePipe: TitleCasePipe) {
  }

  async ngOnChanges() {
    if (!this.componentType) {
      return
    }

    const lazyContentComponent = await import(`../${this.componentType}-content/${this.componentType}-content.component`)
    this.component =  lazyContentComponent[`${this.titleCasePipe.transform(this.componentType)}ContentComponent`]
  }
}
