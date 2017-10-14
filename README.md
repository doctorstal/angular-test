#Manual Angular bootstrap
Looks like manual bootstrapping an Angular app is not a piece of cake.
- You should call `Router::initialNavigation` manually
- You should run it in `NgZone::run`. Or else `ngOnInit` will not be called on components after navigatin via `routerLink`.

I wonder if there is any more magic?

#Why?

I've found lack of Router configuration guide in [Upgrading from AngularJS guide](https://angular.io/guide/upgrade). They describe it as last step of migration - you adding routes and removing angularjs bootstrap.
That is not the way I can migrate my app. I need router right after that hybrid app started, so I can develop my Angular modules.