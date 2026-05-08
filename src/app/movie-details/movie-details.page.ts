import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/angular/standalone';

// Import movie service for API requests
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,

  // Components used in this page
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    RouterLink,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})

export class MovieDetailsPage implements OnInit {

  // Store selected movie ID
  movieId: number = 0;

  // Store cast members
  cast: any[] = [];

  // Store crew members
  crew: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  // Load movie cast and crew when page opens
  ngOnInit() {

    // Get movie ID from route
    this.movieId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    // Retrieve cast and crew from TMDB API
    this.movieService
      .getMovieCredits(this.movieId)
      .subscribe((data: any) => {

        this.cast = data.cast;
        this.crew = data.crew;

      });

  }

}