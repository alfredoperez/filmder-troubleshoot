import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailsResponse } from 'src/app/interfaces/movieDetails-models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  public film!: MovieDetailsResponse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private filmsService: FilmsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //desestructurin the params object
    const { id } = this.activatedRoute.snapshot.params;
    console.log(id)
    this.filmsService.getFilmDetails(id).subscribe(movieResponse => {
      console.log('movie details: ', movieResponse);
      this.film = movieResponse;
    })
  }

  onBackHome(){
    this.router.navigate(['/home']);
  }

}
