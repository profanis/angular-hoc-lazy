import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  Type,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { BaseContentComponent } from "../base-content.component";
import { LazyContentComponent } from "../lazy-content/lazy-content.component";
import { Lazy1ContentComponent } from "../lazy1-content/lazy1-content.component";

@Component({
  selector: "app-lazy-wrapper",
  templateUrl: "./lazy-wrapper.component.html",
  styleUrls: ["./lazy-wrapper.component.scss"],
})
export class LazyWrapperComponent implements OnChanges {
  @ViewChild("lazyContent", { read: ViewContainerRef, static: true })
  lazyContentContainer: ViewContainerRef;

  @Input() componentType: "lazy" | "lazy1";

  ngOnChanges() {
    if (!this.componentType) {
      return;
    }

    let componentTypeToLoad: Type<BaseContentComponent>;

    if (this.componentType === "lazy") {
      componentTypeToLoad = LazyContentComponent;
    }

    if (this.componentType === "lazy1") {
      componentTypeToLoad = Lazy1ContentComponent;
    }

    this.lazyContentContainer.clear();
    this.lazyContentContainer.createComponent(componentTypeToLoad);
  }
}
