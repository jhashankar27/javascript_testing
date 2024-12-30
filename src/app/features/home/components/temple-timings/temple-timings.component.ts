import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temple-timings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-orange-50 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-orange-600 mb-6 text-center">Temple Timings</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Morning Schedule</h3>
            <ul class="space-y-2">
              <li class="flex justify-between">
                <span>Suprabhatam</span>
                <span>5:30 AM</span>
              </li>
              <li class="flex justify-between">
                <span>Temple Opens</span>
                <span>6:00 AM</span>
              </li>
              <li class="flex justify-between">
                <span>Morning Aarti</span>
                <span>7:00 AM</span>
              </li>
            </ul>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Afternoon Schedule</h3>
            <ul class="space-y-2">
              <li class="flex justify-between">
                <span>Madhyahna Puja</span>
                <span>12:00 PM</span>
              </li>
              <li class="flex justify-between">
                <span>Bhog Aarti</span>
                <span>1:00 PM</span>
              </li>
            </ul>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-4 text-orange-600">Evening Schedule</h3>
            <ul class="space-y-2">
              <li class="flex justify-between">
                <span>Evening Aarti</span>
                <span>6:30 PM</span>
              </li>
              <li class="flex justify-between">
                <span>Shayan Aarti</span>
                <span>8:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TempleTimingsComponent {}