import { TitleCasePipe } from "@angular/common";
import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

@Component({
  selector: "app-lazy-wrapper",
  templateUrl: "./lazy-wrapper.component.html",
  styleUrls: ["./lazy-wrapper.component.scss"],
  providers: [TitleCasePipe],
})
export class LazyWrapperComponent implements OnChanges {
  @ViewChild("lazyContent", { read: ViewContainerRef, static: true })
  lazyContentContainer: ViewContainerRef;

  @Input() componentType: "lazy" | "lazy1";

  constructor(private titleCasePipe: TitleCasePipe) {}

  async ngOnChanges() {
    if (!this.componentType) {
      return;
    }

    const lazyContentComponent = await import(
      `../${this.componentType}-content/${this.componentType}-content.component`
    );
    const componentClassName =
      lazyContentComponent[
        `${this.titleCasePipe.transform(this.componentType)}ContentComponent`
      ];
    this.lazyContentContainer.clear();
    this.lazyContentContainer.createComponent(componentClassName);
  }
}
