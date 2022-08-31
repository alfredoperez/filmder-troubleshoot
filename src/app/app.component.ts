import { Component } from '@angular/core';
import { MoviesListingResponse } from './interfaces/models';
import { FilmsService } from './services/films.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private filmsService: FilmsService){
   this.filmsService.getMoviesListing().subscribe((response: MoviesListingResponse) => {
    console.log(response.results)
   })
  }
}
