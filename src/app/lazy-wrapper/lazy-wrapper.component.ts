import { Attribute, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html',
  styleUrls: ['./lazy-wrapper.component.scss']
})
export class LazyWrapperComponent  {
  @ViewChild('lazyContent', { read: ViewContainerRef, static: true }) lazyContentContainer: ViewContainerRef


  constructor(@Attribute('type') private type: 'lazy' | 'lazy1', private cfr: ComponentFactoryResolver) {
  }

  async ngOnInit() {
    const lazyContentComponent = await import(`../${this.type}-content/${this.type}-content.component`)
    console.log(lazyContentComponent)
    const componentClassName = lazyContentComponent[`${this.capitalize(this.type)}ContentComponent`]
    const componentFactory = this.cfr.resolveComponentFactory(componentClassName)
    this.lazyContentContainer.createComponent(componentFactory)
  }


  private capitalize(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
  }

}
