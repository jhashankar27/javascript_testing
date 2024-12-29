import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'events', component: EventsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];