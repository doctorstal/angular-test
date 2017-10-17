import { Component, Inject } from '@angular/core';
@Component({
    selector: 'messaging-component',
    template: `
    <h1>Service upgrade example</h1>
    <p>
    This ng2+ component uses upgraded message service 
    (that uses angularjs-toaser) 
    from ng1 application.
    </p>
    <p>
    <button (click)="sayHello()">Say Hello</button>
    <button (click)="sayGoodbye()">Say Good bye</button>
    </p>
    `
})
export class MessagingComponent {
    constructor(@Inject('MessageService') private messageService) {
        
    }

    sayHello() {
        this.messageService.showMessage('Hello');
    }

    sayGoodbye() {
        this.messageService.showError(`Bye? But we've just met!`);
        this.messageService.showMessage(`Please, don't go...`);
    }

}