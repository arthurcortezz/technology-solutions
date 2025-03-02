import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { UserJWTInterface } from '../../core/user/user.types';
import { NavigationService } from '../../core/navigation/navigation.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {
  public user!: UserJWTInterface;

  private readonly unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private readonly router: Router,
    private readonly service: NavigationService
  ) {}

  ngOnInit(): void {
    this.service
      .get()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: UserJWTInterface) => {
        this.user = res;
      });
  }

  navigate(route: string): void {
    if (route === 'logout') {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
      return;
    }
    this.router.navigate([route]);
  }
}
