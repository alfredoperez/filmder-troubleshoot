import { AfterViewInit, Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Cast } from 'src/app/interfaces/movieDetails-models';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements AfterViewInit {

  @Input() cast: Cast[] = [];

  mySwiper!: Swiper;

  constructor(public translate: TranslateService) {}
  
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

}
