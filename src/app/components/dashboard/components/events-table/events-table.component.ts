import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-table.component.html'
})
export class EventsTableComponent {
  events = [
    {
      id: 1,
      name: 'Ram Navami Celebration',
      date: '2024-03-15',
      time: '6:00 AM',
      status: 'Upcoming'
    },
    {
      id: 2,
      name: 'Hanuman Jayanti',
      date: '2024-03-22',
      time: '5:00 AM',
      status: 'Planning'
    },
    {
      id: 3,
      name: 'Weekly Bhajan',
      date: '2024-03-07',
      time: '6:30 PM',
      status: 'Completed'
    }
  ];

  getStatusClass(status: string): string {
    const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
    switch (status.toLowerCase()) {
      case 'upcoming':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'planning':
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  }
}