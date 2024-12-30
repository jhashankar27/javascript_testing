import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { EventsTableComponent } from './components/events-table/events-table.component';
import { DonationChartComponent } from './components/donation-chart/donation-chart.component';
import { DevoteeVisitsComponent } from './components/devotee-visits/devotee-visits.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    StatisticsComponent,
    EventsTableComponent,
    DonationChartComponent,
    DevoteeVisitsComponent,
    UserMenuComponent,
    SidebarComponent,
    AdminFooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}