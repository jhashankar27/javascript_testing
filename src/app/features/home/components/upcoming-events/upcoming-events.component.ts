import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  id: number;
  date: string;
  month: string;
  title: string;
  time: string;
}

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-orange-600 mb-6">Upcoming Events</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        @for (event of events; track event.id) {
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-start">
              <div class="bg-orange-100 text-orange-600 p-2 rounded-lg mr-4 text-center min-w-[60px]">
                <div class="text-lg font-bold">{{ event.date }}</div>
                <div class="text-sm">{{ event.month }}</div>
              </div>
              <div>
                <h4 class="font-semibold">{{ event.title }}</h4>
                <p class="text-sm text-gray-600">{{ event.time }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class UpcomingEventsComponent {
  @Input() events: Event[] = [];
}