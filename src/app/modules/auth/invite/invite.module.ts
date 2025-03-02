import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { inviteRoutes } from './invite.routing';
import { SharedModule } from '../../../shared/shared.module';
import { InviteListComponent } from './components/invite-list/invite-listcomponent';
import { InviteFormComponent } from './components/invite-form/invite-form.component';

@NgModule({
  declarations: [InviteFormComponent, InviteListComponent],
  imports: [
    SharedModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NgOptimizedImage,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(inviteRoutes),
  ],
})
export class InviteModule {}
