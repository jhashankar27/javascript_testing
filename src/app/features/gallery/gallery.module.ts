import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: GalleryComponent }]),
  ],
})
export class GalleryModule {}
