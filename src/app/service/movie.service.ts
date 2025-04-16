import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.omdbApiUrl;

  constructor(private readonly http:HttpClient) { }

  private readonly DB_URL = "http://localhost:3000/movies";
  // private readonly DB_URL = "http://localhost:8083/movies";
  
  GetAllMovies(){
    return this.http.get<any[]>(this.DB_URL);
  }
  
  GetMovieByID(id: number) {
    return this.http.get<any[]>(this.DB_URL, { params: { imdbId: id } });
  }

  searchMovie(title: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${environment.omdbApiKey}&t=${title}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        return {
          movieName: response.Title,
          type: response.Type,
          releaseYear: response.Year,
          poster: response.Poster,
          rate: response.imdbRating
        };
      })
    );
  }
  
}
