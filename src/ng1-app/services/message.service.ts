MessageService.$inject = ['toaster'];
export function MessageService(toaster) {
    this.showMessage = function (msg) {
        toaster.pop({ body: msg, type: 'info'});
    }
    this.showError = function (msg) {
        toaster.pop({ body: msg, type: 'error'});
    }
}

