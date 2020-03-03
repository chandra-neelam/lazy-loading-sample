import { Component } from '@angular/core';

@Component({
  selector: 'accounts-home',
  template: '<h1>Accounts Module - Home Page</h1>'
})
export class AccountsHomeComponent {
  public question: string = "Are you sure to leave Accounts module?";
}
