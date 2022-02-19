import { Component } from "@angular/core";
import { BaseContentComponent } from "../base-content.component";

@Component({
  selector: "app-lazy2-content",
  template: `
    This the content of the
    <span style="color: pink">Lazy2 Load Component</span>
  `,
})
export class Lazy2ContentComponent extends BaseContentComponent {
  constructor() {
    super();
  }

  onLazyWrapperClick() {
    console.log(
      "a click from wrapper invoked a method on lazy-content.component"
    );
  }
}
