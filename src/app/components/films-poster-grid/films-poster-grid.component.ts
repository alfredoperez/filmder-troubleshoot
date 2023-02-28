import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/listingMovies-models';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css'],
})
export class FilmsPosterGridComponent {
  @Input() movies: Movie[] = [];

  constructor(private router: Router) {}

  showDetailFilm(movie: Movie) {
    this.router.navigate(['/film', movie.id]);
  }
}
