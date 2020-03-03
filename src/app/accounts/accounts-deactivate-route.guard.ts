import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AccountsHomeComponent } from './accounts-home.component';

@Injectable()
export class AccountsDeactivateRouteGuard implements CanDeactivate<AccountsHomeComponent> {
  canDeactivate(component: AccountsHomeComponent): boolean {
      return confirm(component.question);
  }
}