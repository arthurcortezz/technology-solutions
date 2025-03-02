import { Route } from '@angular/router';

import { InviteFormComponent } from './components/invite-form/invite-form.component';
import { InviteListComponent } from './components/invite-list/invite-listcomponent';

export const inviteRoutes: Route[] = [
  {
    path: '',
    component: InviteListComponent,
  },
  {
    path: 'criar',
    component: InviteFormComponent,
  },
  {
    path: 'editar/:id',
    component: InviteFormComponent,
  },
];
