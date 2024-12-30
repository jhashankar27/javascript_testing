import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-orange-600 text-white py-4 px-6">
      <div class="text-center">
        <p class="text-sm">
          © {{currentYear}} Temple Administration Portal. All rights reserved.
        </p>
        <p class="text-xs text-orange-200 mt-1">
          Version 1.0.0 | Authorized Access Only
        </p>
      </div>
    </footer>
  `
})
export class AdminFooterComponent {
  currentYear = new Date().getFullYear();
}