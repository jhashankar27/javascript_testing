import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-orange-600 py-4">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <a href="#" class="bg-orange-700 text-white p-4 rounded-lg text-center hover:bg-orange-800 transition">
            <i class="fas fa-calendar-alt text-2xl mb-2"></i>
            <div>Book Seva</div>
          </a>
          <a href="#" class="bg-orange-700 text-white p-4 rounded-lg text-center hover:bg-orange-800 transition">
            <i class="fas fa-hand-holding-heart text-2xl mb-2"></i>
            <div>Make Donation</div>
          </a>
          <a href="#" class="bg-orange-700 text-white p-4 rounded-lg text-center hover:bg-orange-800 transition">
            <i class="fas fa-clock text-2xl mb-2"></i>
            <div>Temple Timings</div>
          </a>
          <a href="#" class="bg-orange-700 text-white p-4 rounded-lg text-center hover:bg-orange-800 transition">
            <i class="fas fa-map-marker-alt text-2xl mb-2"></i>
            <div>Location</div>
          </a>
        </div>
      </div>
    </div>
  `
})
export class QuickLinksComponent {}