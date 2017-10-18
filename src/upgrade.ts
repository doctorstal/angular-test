import { FactoryProvider, InjectionToken } from "@angular/core";

export function upgradeService(name: string, factory: Function): FactoryProvider {
    return {
        provide: name,
        useFactory: factory,
        deps: ['$injector']
    }
}

export function messageServiceFactory($injector) {
    return $injector.get('MessageService');
}
export const MessageServiceProvider = upgradeService('MessageService', messageServiceFactory);