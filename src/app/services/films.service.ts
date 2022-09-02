import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { Movie, MoviesListingResponse } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private moviesListingPage = 1;
  public loading: boolean = false;

  constructor(private http: HttpClient) { }

  get params() {
    return {
      api_key: '406ac682d93f72cd6bc327be30109839',
      language: 'es-ES',
      page: this.moviesListingPage.toString()
    }
  }

  getMoviesListing():Observable<Movie[]>{
    
    if (this.loading) {
      return of([]);
    }
    this.loading = true;
    //increment moviesListingPage in each get call
    return this.http.get<MoviesListingResponse>(`${this.baseUrl}/movie/now_playing`, {params: this.params}).pipe(
      map((response) => response.results),
      tap(() => {
        console.log('Llamada a api')
        this.moviesListingPage += 1;
        this.loading = false;
      })
    );
  }
}
