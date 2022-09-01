import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FilmsPosterGridComponent } from './films-poster-grid/films-poster-grid.component';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    FilmsPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    FilmsPosterGridComponent
  ]
})
export class ComponentsModule { }
