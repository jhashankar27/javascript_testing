import { Injectable } from '@angular/core';
import { TempleImage } from '../types/image.types';
import { templeImages } from '../data/temple-images';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  getAllImages(): TempleImage[] {
    return [...templeImages.templeImages, ...templeImages.eventImages];
  }

  getTempleImages(): TempleImage[] {
    return templeImages.templeImages;
  }

  getEventImages(): TempleImage[] {
    return templeImages.eventImages;
  }
}