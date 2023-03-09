import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest, Subscription } from 'rxjs';
import { routeAnimation } from 'src/app/animations/animations';
import { Cast, MovieDetailsResponse } from 'src/app/interfaces/movieDetails-models';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css'],
  animations: [routeAnimation],
})
export class FilmDetailsComponent implements OnInit, OnDestroy {
  @HostBinding('@routeFadeState') routeAnimate = true;
  private subscriptions: Subscription[] = [];
  public film!: MovieDetailsResponse;
  public cast: Cast[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private filmsService: FilmsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //desestructuring the params object
    const { id } = this.activatedRoute.snapshot.params;
    this.onGetFilmData(id);
    this.subscriptions.push(
      this.translate.onLangChange.subscribe(() => {
        this.onGetFilmData(id);
      })
    );
  }

  onGetFilmData(id: string) {
    this.subscriptions.push(
      // using rxjs operator to collect the content of 2 or more observables and get it in an array
      combineLatest([
        this.filmsService.getFilmDetails(id),
        this.filmsService.getFilmCasting(id),
      ]).subscribe(([film, cast]) => {
        console.log({ film, cast });
        if (!film) {
          this.router.navigate(['/home']);
          return;
        }
        this.film = film;
        this.cast = cast.filter((actor) => actor.profile_path != null);
      })
    );
  }

  onBackHome() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
    }
  }
}
