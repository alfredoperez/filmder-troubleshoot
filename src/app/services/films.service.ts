import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesListingResponse } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getMoviesListing():Observable<MoviesListingResponse>{
    return this.http.get<MoviesListingResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=406ac682d93f72cd6bc327be30109839&language=es-ES&page=1')
  }
}
