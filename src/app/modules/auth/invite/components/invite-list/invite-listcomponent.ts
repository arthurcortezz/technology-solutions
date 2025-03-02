import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InvitesService } from '../../invite.service';

@Component({
  selector: 'app-invite-list',
  templateUrl: './invite-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class InviteListComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly service: InvitesService
  ) {}

  public invites!: any[];

  ngOnInit(): void {
    this.service.findAll().subscribe((invites) => {
      this.invites = invites;
    });
  }

  createInvite() {
    this.router.navigate(['/convites/criar']);
  }

  formatStatus(status: string) {
    if (status === 'accepted') return 'Aceito';
    else if (status === 'pending') return 'Pendente';
    else return 'Recusado';
  }
}
