import { sampleModule } from './modules/sample/sample.module';
import { MessageService } from "./services/message.service";
import * as angular from 'angular';

export const application = angular.module('application', [
    sampleModule.name,
    'toaster'
])
.service('MessageService', MessageService);
