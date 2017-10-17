import * as angular from 'angular';

export const sampleComponent: angular.IComponentOptions = {
    templateUrl: 'sample.component.html',
    controllerAs: 'vm',
    controller: sampleController
}

sampleController.$inject = ['MessageService']
function sampleController(MessageService) {
    this.name = 'Sample Component';
    this.showDescription = false;
    this.toggleDescription = () => {
        this.showDescription = !this.showDescription;
        MessageService.showMessage(this.showDescription
            ? 'Description is shown'
            : 'Description is hidden');
    }
}