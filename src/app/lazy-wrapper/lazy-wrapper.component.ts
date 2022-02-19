import {
  Component,
  Input,
  OnChanges,
  Type,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { BaseContentComponent } from "../base-content.component";

@Component({
  selector: "app-lazy-wrapper",
  templateUrl: "./lazy-wrapper.component.html",
  styleUrls: ["./lazy-wrapper.component.scss"],
})
export class LazyWrapperComponent implements OnChanges {
  @ViewChild("lazyContent", { read: ViewContainerRef, static: true })
  lazyContentContainer: ViewContainerRef;

  @Input() componentType: "lazy" | "lazy1";

  async ngOnChanges() {
    if (!this.componentType) {
      return;
    }

    let componentTypeToLoad: Type<BaseContentComponent>;

    // lazy load component
    if (this.componentType === "lazy") {
      const lazyContentComponent = await import(
        `../lazy-content/lazy-content.component`
      );
      componentTypeToLoad = lazyContentComponent.LazyContentComponent;
    }

    // lazy load component
    if (this.componentType === "lazy1") {
      const lazy1ContentComponent = await import(
        `../lazy1-content/lazy1-content.component`
      );
      componentTypeToLoad = lazy1ContentComponent.Lazy1ContentComponent;
    }

    this.lazyContentContainer.clear();
    this.lazyContentContainer.createComponent(componentTypeToLoad);
  }
}
