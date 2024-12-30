import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  template: `
    <div class="text-red-600 p-4 text-center">
      {{ message }}
    </div>
  `
})
export class ErrorComponent {
  @Input() message = 'An error occurred';