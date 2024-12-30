import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-donation-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation-chart.component.html'
})
export class DonationChartComponent implements OnInit {
  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    const ctx = document.getElementById('donationChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Donations (₹)',
          data: [65000, 72000, 85400, 78000, 90000, 95000],
          borderColor: 'rgb(234, 88, 12)',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false
          }
        }
      }
    });
  }
}