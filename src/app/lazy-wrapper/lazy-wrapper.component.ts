import { Attribute, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseContentComponent } from '../base-content.component';

@Component({
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html',
  styleUrls: ['./lazy-wrapper.component.scss']
})
export class LazyWrapperComponent  {
  @ViewChild('lazyContent', { read: ViewContainerRef, static: true }) lazyContentContainer: ViewContainerRef
  private component: BaseContentComponent


  constructor(private cfr: ComponentFactoryResolver, @Attribute('type') private type: 'lazy' | 'lazy1') {
  }


  async ngOnInit() {
    const lazyContentComponent = await import(`../${this.type}-content/${this.type}-content.component`)
    const componentClassName = lazyContentComponent[`${this.capitalize(this.type)}ContentComponent`]
    const componentRef = this.lazyContentContainer.createComponent<BaseContentComponent>(this.cfr.resolveComponentFactory(componentClassName))
    this.component = componentRef.instance
  }

  onClick() {
    this.component.onLazyWrapperClick()
  }

  private capitalize(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1).toLowerCase()}`
  }

}
