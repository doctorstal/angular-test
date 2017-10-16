import { SampleModule } from './sample/sample.module';
import { Router, RouterModule } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    SampleModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  ngDoBootstrap(){
    // Empty bootstrap for hybrid app is required
  }
 }
