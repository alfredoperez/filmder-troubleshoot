import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostListener,
  NO_ERRORS_SCHEMA,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ComponentsModule } from 'src/app/components/components.module';
import { Movie } from 'src/app/interfaces/listingMovies-models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  standalone: true,
  imports: [CommonModule, TranslateModule, ComponentsModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
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
