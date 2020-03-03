import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsHomeComponent } from './accounts-home.component';
import { AccountsDeactivateRouteGuard } from './accounts-deactivate-route.guard';
import { AccountsPayComponent } from './pay/accounts-pay.component';
import { AccountsReportsComponent } from './reports/accounts-reports.component';



const routes: Routes = [
  {
    path: '',
    component: AccountsHomeComponent,
    canDeactivate: [AccountsDeactivateRouteGuard]
  },
  {
    path: 'pay',
    component: AccountsPayComponent
  },
  {
    path: 'reports',
    component: AccountsReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }