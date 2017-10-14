import { AppComponent } from './app/app.component';
import { Router } from '@angular/router';
import { enableProdMode, ApplicationRef, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    const ngZone: NgZone = moduleRef.injector.get(NgZone);
    ngZone.run(() => {
      const appRef = moduleRef.injector.get(ApplicationRef);
      appRef.bootstrap(AppComponent);

      const router = moduleRef.injector.get(Router);
      router.initialNavigation();
    });
  })
  .catch(err => console.log(err));
