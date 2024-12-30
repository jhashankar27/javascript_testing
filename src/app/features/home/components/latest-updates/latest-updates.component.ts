import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Update {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-latest-updates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-12">
      <h2 class="text-3xl font-bold text-orange-600 mb-6">Latest Updates</h2>
      <div class="space-y-6">
        @for (update of updates; track update.id) {
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold mb-2">{{ update.title }}</h3>
            <p class="text-gray-600">{{ update.description }}</p>
            <div class="mt-4">
              <a href="#" class="text-orange-600 hover:text-orange-700">Read More →</a>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class LatestUpdatesComponent {
  @Input() updates: Update[] = [];
}