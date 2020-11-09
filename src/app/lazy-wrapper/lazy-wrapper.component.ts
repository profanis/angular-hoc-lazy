import { Component, ComponentFactoryResolver, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html',
  styleUrls: ['./lazy-wrapper.component.scss']
})
export class LazyWrapperComponent implements OnChanges  {
  @ViewChild('lazyContent', { read: ViewContainerRef, static: true }) lazyContentContainer: ViewContainerRef

  @Input() componentType: 'lazy' | 'lazy1'

  constructor(private cfr: ComponentFactoryResolver) {
  }

  async ngOnChanges() {
    const lazyContentComponent = await import(`../${this.componentType}-content/${this.componentType}-content.component`)
    const componentClassName = lazyContentComponent[`${this.capitalize(this.componentType)}ContentComponent`]
    const componentFactory = this.cfr.resolveComponentFactory(componentClassName)
    this.lazyContentContainer.clear()
    this.lazyContentContainer.createComponent(componentFactory)
  }

  private capitalize(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
  }

}
