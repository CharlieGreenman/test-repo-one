import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthCoreModule } from "@test-repo-one/common/common-services";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
