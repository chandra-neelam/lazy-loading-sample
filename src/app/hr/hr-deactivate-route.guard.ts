import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { HrHomeComponent } from './hr-home.component';


@Injectable()
export class HrDeactivateRouteGuard implements CanDeactivate<HrHomeComponent> {
  canDeactivate(component: HrHomeComponent): boolean {
      return confirm(component.question);
  }
}