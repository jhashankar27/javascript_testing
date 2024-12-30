import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { DonationChartComponent } from './components/donation-chart/donation-chart.component';
import { DevoteeVisitsComponent } from '../../components/dashboard/components/devotee-visits/devotee-visits.component';
import { EventsTableComponent } from '../../components/dashboard/components/events-table/events-table.component';
import { SidebarComponent } from '../../components/dashboard/components/sidebar/sidebar.component';
import { UserMenuComponent } from '../../components/dashboard/components/user-menu/user-menu.component';
import { AdminFooterComponent } from '../../components/dashboard/components/admin-footer/admin-footer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StatisticsComponent,
    DonationChartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    DevoteeVisitsComponent,
    EventsTableComponent,
    SidebarComponent,
    UserMenuComponent,
    AdminFooterComponent,
  ],
})
export class DashboardModule {}