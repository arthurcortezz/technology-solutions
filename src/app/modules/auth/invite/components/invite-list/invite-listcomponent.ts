import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class InviteListComponent {
  constructor(private readonly router: Router) {}

  createInvite() {
    this.router.navigate(['/convites/criar']);
  }
}
