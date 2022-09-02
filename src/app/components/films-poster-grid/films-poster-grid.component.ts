import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/ListingMovies-models';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css']
})
export class FilmsPosterGridComponent implements OnInit {
 
  @Input() movies: Movie[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetailFilm(movie: Movie){
    this.router.navigate(['/film', movie.id]);
  }

}
