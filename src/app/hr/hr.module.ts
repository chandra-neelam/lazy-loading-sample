import { NgModule } from '@angular/core';
import { HrHomeComponent } from './hr-home.component';
import { HrRoutingModule } from './hr.routing.module';
import { HrDeactivateRouteGuard } from './hr-deactivate-route.guard';

@NgModule({
    declarations: [
        HrHomeComponent
      ],
      imports: [HrRoutingModule],
      providers: [HrDeactivateRouteGuard]
})
export class HrModule { }