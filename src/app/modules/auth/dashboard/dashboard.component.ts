import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { UserJWTInterface } from '../../../core/user/user.types';
import { NavigationService } from '../../../core/navigation/navigation.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  public user!: {
    userId: number;
    username: string;
  };

  private readonly unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private readonly service: NavigationService) {}

  ngOnInit(): void {
    this.service
      .get()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: UserJWTInterface) => {
        this.user = {
          userId: res.id,
          username: res.name,
        };
      });
  }
}
