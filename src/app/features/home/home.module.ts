import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { LatestUpdatesComponent } from './components/latest-updates/latest-updates.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { TempleTimingsComponent } from './components/temple-timings/temple-timings.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSliderComponent,
    QuickLinksComponent,
    LatestUpdatesComponent,
    UpcomingEventsComponent,
    TempleTimingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ]
})
export class HomeModule {}