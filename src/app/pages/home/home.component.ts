import { Component, OnInit } from '@angular/core';
import { Movie, MoviesListingResponse } from 'src/app/interfaces/models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getMoviesListing();
  }

  getMoviesListing(){
    this.filmsService.getMoviesListing().subscribe((response: MoviesListingResponse) => {
      this.movies = response.results;
     })
  }

}
