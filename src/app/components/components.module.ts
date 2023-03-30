import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StarRatingModule } from 'angular-star-rating';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FilmsPosterGridComponent } from './films-poster-grid/films-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';
import { LoaderComponent } from './loader/loader.component';
import { SwitchModeComponent } from './switch-mode/switch-mode.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    FilmsPosterGridComponent,
    CastSlideshowComponent,
    LoaderComponent,
    SwitchModeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    StarRatingModule.forRoot(),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient],
      },
      extend: true,
    }),
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    FilmsPosterGridComponent,
    CastSlideshowComponent,
    LoaderComponent,
    TranslateModule,
  ],
})
export class ComponentsModule {}
