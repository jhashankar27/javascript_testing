import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TempleImage } from '../models';
import { templeImages } from '../../data/temple-images';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor(private http: HttpClient) {}

  getAllImages(): Observable<TempleImage[]> {
    // In a real app, this would be an HTTP call
    return of([...templeImages.templeImages, ...templeImages.eventImages]);
  }

  getTempleImages(): Observable<TempleImage[]> {
    return of(templeImages.templeImages);
  }

  getEventImages(): Observable<TempleImage[]> {
    return of(templeImages.eventImages);
  }
}