import * as angular from 'angular';

export const sampleComponent: angular.IComponentOptions = {
    templateUrl: 'sample.component.html',
    controllerAs: 'vm',
    controller: function() {
        this.name = 'Sample Component';
        this.showDescription = false;
        this.toggleDescription = () => {
            this.showDescription = !this.showDescription;
        }
    }
}