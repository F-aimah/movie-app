import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';

// Import movie service for API requests
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  // Components used in this page
  imports: [
    CommonModule,
    FormsModule,

    RouterLink,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonButton
  ]
})

export class HomePage implements OnInit {

  // Store movies returned from API
  movies: any[] = [];

  // Store search input value
  searchTerm: string = '';

  // Store favourite movies
  favourites: any[] = [];

  // Inject MovieService
  constructor(private movieService: MovieService) {}

  // Load popular movies when page opens
  ngOnInit() {
    this.loadPopularMovies();
  }

  // Get popular movies from TMDB API
  loadPopularMovies() {

    this.movieService.getPopularMovies().subscribe((data: any) => {

      this.movies = data.results;

    });

  }

  // Search movies using search bar input
  searchMovies() {

    // Reload popular movies if search bar is empty
    if (this.searchTerm.trim() === '') {

      this.loadPopularMovies();

      return;

    }

    // Search movies from API
    this.movieService.searchMovies(this.searchTerm).subscribe((data: any) => {

      this.movies = data.results;

    });

  }

  // Add selected movie to favourites
  addToFavourites(movie: any) {

    this.favourites.push(movie);

    // Save favourites to local storage
    localStorage.setItem(
      'favourites',
      JSON.stringify(this.favourites)
    );

    alert('Movie added to favourites!');

  }

}