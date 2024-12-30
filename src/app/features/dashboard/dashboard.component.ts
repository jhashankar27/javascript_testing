import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    :host {
      display: block;
    }
    
    .dashboard-content {
      transition: margin-left 0.3s ease-in-out;
    }
  `]
})
export class DashboardComponent {}