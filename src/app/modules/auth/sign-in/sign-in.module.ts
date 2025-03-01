import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { authSignInRoutes } from './sign-in.routing';
import { AuthSignInComponent } from './sign-in.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AuthSignInComponent],
  imports: [
    SharedModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NgOptimizedImage,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(authSignInRoutes),
  ],
})
export class AuthSignInModule {}
