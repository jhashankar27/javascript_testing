import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from './sidebar.types';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isExpanded = false;
  menuItems: MenuItem[] = [
    {
      route: '/dashboard',
      icon: 'fas fa-tachometer-alt',
      label: 'Dashboard',
      exact: true
    },
    {
      route: '/dashboard/events',
      icon: 'fas fa-calendar',
      label: 'Events'
    },
    {
      route: '/dashboard/donations',
      icon: 'fas fa-hand-holding-heart',
      label: 'Donations'
    },
    {
      route: '/dashboard/devotees',
      icon: 'fas fa-users',
      label: 'Devotees'
    }
  ];

  expand(): void {
    this.isExpanded = true;
  }

  collapse(): void {
    this.isExpanded = false;
  }
}