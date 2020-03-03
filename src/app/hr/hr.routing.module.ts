import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrHomeComponent } from './hr-home.component';
import { HrDeactivateRouteGuard } from './hr-deactivate-route.guard';
import { HrPoliciesComponent } from './policies/hr-policies.component';
import { HrReportsComponent } from './reports/hr-reports.component';



const routes: Routes = [
  {
    path: '',
    component: HrHomeComponent,
    canDeactivate: [HrDeactivateRouteGuard]
  },
  {
    path: 'policies',
    component: HrPoliciesComponent
  },
  {
    path: 'reports',
    component: HrReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }