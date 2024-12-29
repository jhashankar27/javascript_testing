import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-3xl font-bold text-orange-600 mb-8">Upcoming Events</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (event of events; track event.id) {
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              [src]="event.image"
              [alt]="event.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2">{{ event.title }}</h3>
              <p class="text-gray-600 mb-2">{{ event.date }}</p>
              <p class="text-gray-700">{{ event.description }}</p>
            </div>
          </div>
        }
      </div>
    </div>
  `
})
export class EventsComponent {
  events = [
    {
      id: 1,
      title: 'Diwali Celebration',
      date: 'November 12, 2024',
      description: 'Join us for the grand Diwali celebration with special pujas and cultural programs.',
      image: 'https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg'
    },
    {
      id: 2,
      title: 'Ganesh Chaturthi',
      date: 'September 7, 2024',
      description: 'Special prayers and celebrations for Lord Ganesha.',
      image: 'https://images.pexels.com/photos/5998122/pexels-photo-5998122.jpeg'
    },
    {
      id: 3,
      title: 'Weekly Bhajan',
      date: 'Every Thursday',
      description: 'Join us for weekly bhajan and spiritual discourse.',
      image: 'https://images.pexels.com/photos/6773832/pexels-photo-6773832.jpeg'
    }
  ];
}