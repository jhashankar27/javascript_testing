import { Component, OnInit, OnDestroy } from '@angular/core';
import { heroSlides } from './hero-slider.data';
import { HeroSlide } from './hero-slide.interface';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html'
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
  }

  private resetSlideshow() {
    this.stopSlideshow();
    this.startSlideshow();
  }
}