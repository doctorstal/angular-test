import "../../node_modules/angular/angular.js"

import { sampleModule } from './modules/sample/sample.module';
import * as angular from 'angular';

export const application = angular.module('application', [
    sampleModule.name
]);
