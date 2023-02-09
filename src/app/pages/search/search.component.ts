import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/listingMovies-models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public textSearched: string = '';
  movies: Movie[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private filmsService: FilmsService,
    private translate: TranslateService
    ) { }

  ngOnInit(): void {
    this.onSearchFilms();

    this.subscriptions.push(
      this.translate.onLangChange.subscribe(() => {
        this.onSearchFilms();
      })
    );
  }

  onSearchFilms(){
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params) => {
        this.textSearched = params['text'];
        this.filmsService.searchFilms(params['text']).subscribe(movies => {
          this.movies = movies;
        })
      })
    );
  }

  ngOnDestroy(): void {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
    }
  }

}
