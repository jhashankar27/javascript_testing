import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  // In a real application, these would come from a service
  statistics = {
    dailyVisitors: {
      count: 1234,
      trend: '+12%',
      trendDirection: 'up'
    },
    monthlyDonations: {
      amount: 85400,
      trend: '+8%',
      trendDirection: 'up'
    },
    pujaBookings: {
      count: 156,
      period: 'Next 7 days'
    },
    prasadDistribution: {
      count: 750,
      period: 'Today'
    }
  };
}