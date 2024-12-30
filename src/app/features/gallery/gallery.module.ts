import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: GalleryComponent }]),
  ],
})
export class GalleryModule {}