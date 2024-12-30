import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../components/contact/contact.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
  ],
})
export class ContactModule {}