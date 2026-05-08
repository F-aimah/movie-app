import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Service used for all TMDB API requests
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // TMDB API key
  apiKey = '641df3a34ffb8e52afa1d2a43a56edcc';

  // Base API URL
  baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  // Get popular movies
  getPopularMovies(): Observable<any> {

    return this.http.get(
      `${this.baseUrl}/movie/popular?api_key=${this.apiKey}`
    );

  }

  // Search movies by title
  searchMovies(searchTerm: string): Observable<any> {

    return this.http.get(
      `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${searchTerm}`
    );

  }

  // Get cast and crew for selected movie
  getMovieCredits(movieId: number): Observable<any> {

    return this.http.get(
      `${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`
    );

  }

  // Get actor details
  getPersonDetails(personId: number): Observable<any> {

    return this.http.get(
      `${this.baseUrl}/person/${personId}?api_key=${this.apiKey}`
    );

  }

  // Get movies actor appeared in
  getPersonMovieCredits(personId: number): Observable<any> {

    return this.http.get(
      `${this.baseUrl}/person/${personId}/movie_credits?api_key=${this.apiKey}`
    );

  }

}