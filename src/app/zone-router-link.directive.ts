import { Directive, Input, HostListener, NgZone } from '@angular/core';
import { RouterLinkWithHref, Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Directive({
  selector: '[zoneRouterLink]'
})
export class ZoneRouterLinkDirective extends RouterLinkWithHref {

  constructor(private ngZone: NgZone, router: Router, route: ActivatedRoute, locationStrategy: LocationStrategy) {
    super(router, route, locationStrategy);
  }

  @Input() set zoneRouterLink(value: string) {
    this.routerLink = value;
  }

  @HostListener('click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'])
  onClick(button: number, ctrlKey: boolean, metaKey: boolean, shiftKey: boolean): boolean {
    console.log('onClick');
    // return super.onClick.apply(this, arguments);

    return this.ngZone.run(()=>super.onClick(button, ctrlKey, metaKey, shiftKey));
  }

}
