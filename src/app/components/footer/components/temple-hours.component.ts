import { Component } from '@angular/core';

@Component({
  selector: 'app-temple-hours',
  standalone: true,
  template: `
    <div>
      <h3 class="text-xl font-semibold mb-4">Temple Hours</h3>
      <p class="mb-2">Monday - Friday: 6:00 AM - 9:00 PM</p>
      <p class="mb-2">Saturday - Sunday: 5:30 AM - 9:30 PM</p>
      <p>Festival Days: 4:00 AM - 11:00 PM</p>
    </div>
  `
})
export class TempleHoursComponent {}