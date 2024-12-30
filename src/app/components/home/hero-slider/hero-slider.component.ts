import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroSlides } from './hero-slider.data';
import { HeroSlide } from './hero-slide.interface';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative h-[500px] overflow-hidden">
      @for (slide of slides; track slide.id) {
        <div 
          class="absolute inset-0 transition-opacity duration-1000"
          [class.opacity-100]="currentSlide === slide.id"
          [class.opacity-0]="currentSlide !== slide.id"
        >
          <img 
            [src]="slide.imageUrl"
            [alt]="slide.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black opacity-40"></div>
          <div class="relative container mx-auto px-4 h-full flex items-center">
            <div class="text-white max-w-2xl">
              <h1 class="text-5xl font-bold mb-4">{{ slide.title }}</h1>
              <p class="text-xl mb-4">{{ slide.subtitle }}</p>
              <p class="text-lg text-gray-200">{{ slide.description }}</p>
            </div>
          </div>
        </div>
      }

      <!-- Navigation Dots -->
      <div class="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
        @for (slide of slides; track slide.id) {
          <button
            (click)="goToSlide(slide.id)"
            class="w-3 h-3 rounded-full transition-colors duration-300"
            [class.bg-white]="currentSlide === slide.id"
            [class.bg-gray-400]="currentSlide !== slide.id"
          ></button>
        }
      </div>
    </div>
  `
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  slides: HeroSlide[] = heroSlides;
  currentSlide = 1;
  private intervalId: any;

  ngOnInit() {
    this.startSlideshow();
  }

  ngOnDestroy() {
    this.stopSlideshow();
  }

  private startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private stopSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  goToSlide(slideId: number) {
    this.currentSlide = slideId;
    this.resetSlideshow();
  }

  private nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length ? 1 : this.currentSlide + 1;
    this.resetSlideshow();
  }

  private resetSlideshow() {
    this.stopSlideshow();
    this.startSlideshow();
  }
}