import { Component, HostListener, OnInit } from '@angular/core';
import { Movie, MoviesListingResponse } from 'src/app/interfaces/models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    console.log({pos, max});

    if (pos > max) {
      this.filmsService.getMoviesListing().subscribe((movies: Movie[]) => {
        this.movies.push(...movies);
       });
    }
  }

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getMoviesListing();
  }

  getMoviesListing(){
    this.filmsService.getMoviesListing().subscribe((movies: Movie[]) => {
      this.movies = movies;
      this.moviesSlideshow = movies;
     })
  }

}
