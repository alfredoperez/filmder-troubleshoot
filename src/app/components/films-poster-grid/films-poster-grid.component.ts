import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/models';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css']
})
export class FilmsPosterGridComponent implements OnInit {
 
  @Input() movies: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
