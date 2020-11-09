import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LazyWrapperComponent } from './lazy-wrapper/lazy-wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    LazyWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
