import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './components/contact-info.component';
import { QuickLinksComponent } from './components/quick-links.component';
import { TempleHoursComponent } from './components/temple-hours.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ContactInfoComponent, QuickLinksComponent, TempleHoursComponent],
  template: `
    <footer class="bg-orange-600 text-white py-8 mt-auto">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <app-contact-info />
          <app-quick-links />
          <app-temple-hours />
        </div>
        <div class="border-t border-orange-500 mt-8 pt-8 text-center">
          <p>&copy; {{currentYear}} श्री Hindu Temple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}