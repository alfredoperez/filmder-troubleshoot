import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit(): void {
    //desestructurin the params object
    const { id } = this.activatedRoute.snapshot.params;
    console.log(id)
    this.filmsService.getFilmDetails(id).subscribe( movie => {
      console.log('movie details: ', movie);
    })
  }

}
