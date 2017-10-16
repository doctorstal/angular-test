import { sampleComponent } from './sample.component';
import * as angular from 'angular';

export const sampleModule = angular.module('sample.module', [])
    .component('sampleComponent', sampleComponent);