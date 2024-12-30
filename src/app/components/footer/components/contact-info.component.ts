import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  template: `
    <div>
      <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
      <p class="mb-2">123 Temple Street</p>
      <p class="mb-2">City, State 12345</p>
      <p class="mb-2">Phone: +91 9876543210</p>
      <p>Email: info&#64;hindutemple.in</p>
    </div>
  `
})
export class ContactInfoComponent {}