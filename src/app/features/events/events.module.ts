import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsComponent } from '../../components/events/events.component';

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EventsComponent }]),
  ],
})
export class EventsModule {}
