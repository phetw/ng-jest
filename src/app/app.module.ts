import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './component/hello/hello.component';
import { WorldComponent } from './component/world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
