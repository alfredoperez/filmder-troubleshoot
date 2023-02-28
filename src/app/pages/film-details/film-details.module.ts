import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { FilmDetailsComponent } from './film-details.component';
import { FilmDetailsRoutingModule } from './film-details-routing.module';
import { StarRatingModule } from 'angular-star-rating';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [FilmDetailsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FilmDetailsRoutingModule,
    PipesModule,
    StarRatingModule.forRoot(),
  ],
  exports: [],
  providers: [],
})
export class FilmDetailsModule {}
