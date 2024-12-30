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
          <div class="absolute inset-0 bg-black opacity-60"></div>
          <div class="absolute inset-0 flex items-center">
            <div class="container mx-auto px-4">
              <div class="max-w-2xl text-white space-y-6">
                <h1 class="text-5xl font-bold">{{ slide.title }}</h1>
                <h2 class="text-2xl font-semibold text-orange-300">{{ slide.subtitle }}</h2>
                <p class="text-lg text-gray-100">{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </div>
      }
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

  private nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length ? 1 : this.currentSlide + 1;
  }
}