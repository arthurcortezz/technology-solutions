import { Routes } from '@angular/router';

import { AuthGuard } from './core/auth/guards/auth.guard';

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
      {
        path: 'login',
        loadChildren: () =>
          import('./modules/auth/sign-in/sign-in.module').then(
            (m) => m.AuthSignInModule
          ),
      },
      {
        path: 'dashboard',
        canMatch: [AuthGuard],
        loadChildren: () =>
          import('./modules/auth/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];
