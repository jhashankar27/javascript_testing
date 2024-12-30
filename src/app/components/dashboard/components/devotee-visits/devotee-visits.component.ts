import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-devotee-visits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devotee-visits.component.html'
})
export class DevoteeVisitsComponent implements OnInit {
  ngOnInit() {
    this.createChart();
  }

  private createChart() {
    const ctx = document.getElementById('visitsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Visitors',
          data: [120, 150, 180, 190, 210, 350, 400],
          backgroundColor: 'rgba(234, 88, 12, 0.5)',
          borderColor: 'rgb(234, 88, 12)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });
  }
}