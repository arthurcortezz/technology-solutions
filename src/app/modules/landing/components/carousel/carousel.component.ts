import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CarouselsService } from '../../../carousels/carousels.service';
import { CarouselInterface } from '../../../carousels/interfaces/carousel.interface';

@Component({
  selector: 'app-landing-carrousel',
  templateUrl: './carousel.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LandingCarouselComponent implements OnInit {
  constructor(private readonly service: CarouselsService) {}

  public slides: CarouselInterface[] = [];

  ngOnInit(): void {
    this.service.all().subscribe((data) => {
      this.slides = data;
    });
  }

  currentSlide = 0;

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.slides.length - 1;
    }
  }
}
