import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/listingMovies-models';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  
  @Input() movies: Movie[] = [];

  mySwiper!: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log('movies', this.movies)
  }

  onSlidePrevious(){
    this.mySwiper.slidePrev();
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

}
