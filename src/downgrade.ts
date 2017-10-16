import { AppComponent } from './app/app.component';
import { downgradeComponent } from '@angular/upgrade/static';
import { application as ng1App } from './ng1-app/application';

export { application as ng1App } from './ng1-app/application';

// Hybrid app should be angularJs app, containing downgraded angular2+ component(s)
ng1App.directive('app', downgradeComponent({component: AppComponent}));
