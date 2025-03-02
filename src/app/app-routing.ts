import { Routes } from '@angular/router';

import { AuthGuard } from './core/auth/guards/auth.guard';
import { NoAuthGuard } from './core/auth/guards/no-auth.guard';
import { AuthLayoutComponent } from './modules/layout/auth-layout.component';

export const routes: Routes = [
  { path: '-', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/landing/landing.module').then(
            (m) => m.LandingModule
          ),
      },
    ],
  },
  {
    path: '',
    canActivate: [NoAuthGuard],
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/sign-in/sign-in.module').then(
            (m) => m.AuthSignInModule
          ),
      },
      {
        path: 'cadastro/:token',
        loadChildren: () =>
          import('./modules/auth/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
      },
    ],
  },
  {
    path: '',
    canMatch: [AuthGuard],
    component: AuthLayoutComponent,
    children: [
      {
        path: 'dashboard',
        canMatch: [AuthGuard],
        loadChildren: () =>
          import('./modules/auth/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'convites',
        canMatch: [AuthGuard],
        loadChildren: () =>
          import('./modules/auth/invite/invite.module').then(
            (m) => m.InviteModule
          ),
      },
    ],
  },
];
