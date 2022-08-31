import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    FilmComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
