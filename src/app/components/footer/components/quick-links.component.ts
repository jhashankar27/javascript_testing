import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  template: `
    <div>
      <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-orange-200">Temple History</a></li>
        <li><a href="#" class="hover:text-orange-200">Donation</a></li>
        <li><a href="#" class="hover:text-orange-200">Events</a></li>
        <li><a href="#" class="hover:text-orange-200">Contact</a></li>
      </ul>
    </div>
  `
})
export class QuickLinksComponent {}