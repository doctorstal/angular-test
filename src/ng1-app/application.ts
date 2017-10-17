import "../../node_modules/angular/angular.js";
import "../../node_modules/angularjs-toaster/toaster.js";

import { sampleModule } from './modules/sample/sample.module';
import * as angular from 'angular';
import { MessageService } from "./services/message.service";

export const application = angular.module('application', [
    sampleModule.name,
    'toaster'
])
.service('MessageService', MessageService);
