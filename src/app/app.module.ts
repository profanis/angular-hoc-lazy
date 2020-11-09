import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LazyContentComponent } from './lazy-content/lazy-content.component';
import { LazyWrapperComponent } from './lazy-wrapper/lazy-wrapper.component';
import { Lazy1ContentComponent } from './lazy1-content/lazy1-content.component';


@NgModule({
  declarations: [
    AppComponent,
    LazyWrapperComponent,
    LazyContentComponent,
    Lazy1ContentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LazyContentComponent,
    Lazy1ContentComponent,
  ]
})
export class AppModule { }
