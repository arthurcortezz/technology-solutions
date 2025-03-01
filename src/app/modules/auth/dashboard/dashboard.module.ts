import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { dashboardRoutes } from './dashboard.routing';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, ChartComponent],
  imports: [
    SharedModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NgOptimizedImage,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(dashboardRoutes),
  ],
})
export class DashboardModule {}
