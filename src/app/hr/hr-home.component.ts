import { Component } from '@angular/core';

@Component({
  selector: 'hr-home',
  template: '<h1>HR Module - Home Page</h1>'
})
export class HrHomeComponent {
  public question: string = "Are you sure to leave HR module?";
}
