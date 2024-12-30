import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  latestUpdates = [
    {
      id: 1,
      title: 'Special Puja for Ganesh Chaturthi',
      description: 'Join us for the grand celebration of Ganesh Chaturthi with special pujas and prasad distribution.'
    },
    {
      id: 2,
      title: 'Temple Renovation Update',
      description: 'The temple renovation work is progressing well. The new mandap will be ready by next month.'
    }
  ];

  upcomingEvents = [
    {
      id: 1,
      date: '15',
      month: 'Mar',
      title: 'Ram Navami Celebration',
      time: '6:00 AM - 9:00 PM'
    },
    {
      id: 2,
      date: '22',
      month: 'Mar',
      title: 'Hanuman Jayanti',
      time: '5:00 AM - 10:00 PM'
    },
    {
      id: 3,
      date: '25',
      month: 'Mar',
      title: 'Akshaya Tritiya',
      time: '4:00 AM - 9:00 PM'
    }
  ];
}