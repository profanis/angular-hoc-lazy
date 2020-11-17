import { Component, ComponentFactory, ComponentFactoryResolver, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseContentComponent } from '../base-content.component';
import { LazyContentComponent } from '../lazy-content/lazy-content.component';
import { Lazy1ContentComponent } from '../lazy1-content/lazy1-content.component';

@Component({
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html',
  styleUrls: ['./lazy-wrapper.component.scss']
})
export class LazyWrapperComponent implements OnChanges  {
  @ViewChild('lazyContent', { read: ViewContainerRef, static: true }) lazyContentContainer: ViewContainerRef

  @Input() componentType: 'lazy' | 'lazy1'

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnChanges() {
    let componentFactory: ComponentFactory<BaseContentComponent>

    if (this.componentType === 'lazy') {
      componentFactory = this.cfr.resolveComponentFactory(LazyContentComponent)
    }

    if (this.componentType === 'lazy1') {
      componentFactory = this.cfr.resolveComponentFactory(Lazy1ContentComponent)
    }

    this.lazyContentContainer.clear()
    this.lazyContentContainer.createComponent(componentFactory)
  }


}
