import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
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