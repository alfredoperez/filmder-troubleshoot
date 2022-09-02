import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public textSearched: string = '';
  movies: Movie[] = [];

  constructor(private activatedRoute: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.textSearched = params['text'];
      this.filmsService.searchFilms(params['text']).subscribe(movies => {
        this.movies = movies;
      })
    })
  }

}
