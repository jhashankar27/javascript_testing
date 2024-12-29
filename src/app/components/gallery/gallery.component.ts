import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../services/gallery.service';
import { TempleImage } from '../../types/image.types';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  allImages: TempleImage[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.allImages = this.galleryService.getAllImages();
  }
}