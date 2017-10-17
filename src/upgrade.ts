import { FactoryProvider, InjectionToken } from "@angular/core";

function upgradeService(ng1Name: string, ng2Name?: string): FactoryProvider {
    return {
        provide: ng2Name || ng1Name,
        useFactory: $injector => $injector.get(ng1Name),
        deps: ['$injector']
    }
}

export const MessageService = upgradeService('MessageService');