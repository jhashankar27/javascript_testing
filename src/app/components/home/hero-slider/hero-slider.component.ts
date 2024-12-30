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
          <!-- Darker overlay for better text visibility -->
          <div class="absolute inset-0 bg-black opacity-60"></div>
          
          <!-- Content container with better positioning -->
          <div class="absolute inset-0 flex items-center">
            <div class="container mx-auto px-4">
              <div class="max-w-2xl text-white space-y-6">
                <h1 class="text-5xl font-bold text-white drop-shadow-lg">
                  {{ slide.title }}
                </h1>
                <h2 class="text-2xl font-semibold text-orange-300 drop-shadow-md">
                  {{ slide.subtitle }}
                </h2>
                <p class="text-lg text-gray-100 drop-shadow-md leading-relaxed">
                  {{ slide.description }}
                </p>
              </div>
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