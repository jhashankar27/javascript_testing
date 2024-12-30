import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsComponent } from '../../components/events/events.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: EventsComponent }]),
  ],
})
export class EventsModule {}