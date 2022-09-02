import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cast, MovieDetailsResponse } from 'src/app/interfaces/movieDetails-models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  public film!: MovieDetailsResponse;
  public cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private filmsService: FilmsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //desestructurin the params object
    const { id } = this.activatedRoute.snapshot.params;

    this.onGetFilmDetails(id);
    this.onGetFilmCasting(id);
  }

  onGetFilmDetails(id: string){
    this.filmsService.getFilmDetails(id).subscribe(movieResponse => {
      console.log('movie details: ', movieResponse);
      if (!movieResponse) {
        this.router.navigate(['/home']);
        return;
      }
      this.film = movieResponse;
    })
  }

  onGetFilmCasting(id: string){
    this.filmsService.getFilmCasting(id).subscribe(cast => {
      console.log({cast})
      this.cast = cast.filter(actor => actor.profile_path != null);
    })
  }

  onBackHome(){
    this.router.navigate(['/home']);
  }

}
