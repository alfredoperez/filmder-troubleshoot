import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/listingMovies-models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  movies: Movie[] = [];
  moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const max = document.documentElement.scrollHeight || document.body.scrollHeight;
    // console.log({pos, max});

    if (pos > max) {
      this.filmsService.getMoviesListing().subscribe((movies: Movie[]) => {
        this.movies.push(...movies);
      });
    }
  }

  constructor(private filmsService: FilmsService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.getMoviesListing();
    this.subscriptions.push(
      this.translate.onLangChange.subscribe(() => {
        this.getMoviesListing();
      })
    );
  }

  getMoviesListing() {
    this.subscriptions.push(
      this.filmsService.getMoviesListing().subscribe((movies: Movie[]) => {
        this.movies = movies;
        this.moviesSlideshow = movies;
      })
    );
  }

  ngOnDestroy(): void {
    this.filmsService.resetFirstPage();
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
    }
  }
}
