import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { ZoneRouterLinkDirective } from './zone-router-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    PageOneComponent,
    PageTwoComponent,
    ZoneRouterLinkDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'root', component:RootComponent,
      children: [
        {path:'pageone', component: PageOneComponent},
        {path:'pagetwo', component: PageTwoComponent},
      ] 
    },
    {path: '**', pathMatch: 'full', redirectTo: 'root'}
    ])
  ],
  providers: [],
  entryComponents: [AppComponent, RootComponent, PageOneComponent]
})
export class AppModule {
  ngDoBootstrap() {}
 }
