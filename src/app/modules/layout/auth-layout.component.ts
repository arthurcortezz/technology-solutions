import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { UserJWTInterface } from '../../core/user/user.types';
import { NavigationService } from '../../core/navigation/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent {
  public user!: {
    userId: number;
    username: string;
  };

  menus = [
    { name: 'Dashboard', icon: 'fas fa-home', route: 'dashboard' },
    { name: 'Usuários', icon: 'fas fa-users', route: 'usuarios' },
    { name: 'Convites', icon: 'fas fa-users', route: 'convites' },
    { name: 'Sair', icon: 'fas fa-sign-out-alt', route: 'logout' },
  ];

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
        this.user = {
          userId: res.id,
          username: res.name,
        };
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
