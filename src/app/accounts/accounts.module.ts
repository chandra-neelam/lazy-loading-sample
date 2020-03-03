import { NgModule } from '@angular/core';
import { AccountsHomeComponent } from './accounts-home.component';
import { AccountsRoutingModule } from './accounts.routing.module';
import { AccountsDeactivateRouteGuard } from './accounts-deactivate-route.guard';

@NgModule({
    declarations: [
        AccountsHomeComponent
      ],
      imports: [AccountsRoutingModule],
      providers: [AccountsDeactivateRouteGuard]
})
export class AccountsModule { }