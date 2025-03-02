import { Chart } from 'chart.js';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { InvitesService } from '../invite/invite.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  constructor(
    private service: InvitesService,
    private userService: UserService
  ) {}

  public hasNotPermission = false;
  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      if ([1, 2].includes(user.roleId)) {
        this.loadStatusChart();
        this.loadRolesChart();
      } else {
        this.hasNotPermission = true;
      }
    });
  }
  loadStatusChart() {
    this.service.getStatusChart().subscribe((response) => {
      const labels = response.data.map((item: any) =>
        this.formatStatus(item.status)
      );
      const counts = response.data.map((item: any) => item.count);

      new Chart('statusChart', {
        type: 'pie',
        data: {
          labels,
          datasets: [
            {
              data: counts,
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    });
  }

  loadRolesChart() {
    this.service.getRolesChart().subscribe((response) => {
      const labels = response.data.map((item: any) => item.role);
      const counts = response.data.map((item: any) => item.count);

      new Chart('rolesChart', {
        type: 'bar',
        data: {
          labels,
          datasets: [
            { label: 'Usuários', data: counts, backgroundColor: '#42A5F5' },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    });
  }

  formatStatus(status: string) {
    if (status === 'accepted') return 'Aceito';
    else if (status === 'pending') return 'Pendente';
    else return 'Recusado';
  }
}
