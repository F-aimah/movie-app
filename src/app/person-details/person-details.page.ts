import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
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

// Import movie service
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.page.html',
  styleUrls: ['./person-details.page.scss'],
  standalone: true,

  // Components used in this page
  imports: [
    CommonModule,
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

export class PersonDetailsPage implements OnInit {

  // Store actor details
  person: any;

  // Store actor movie list
    movies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  // Load actor details and movie credits
  ngOnInit() {

    // Get actor ID from URL
    const personId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    // Retrieve actor information
    this.movieService
      .getPersonDetails(personId)
      .subscribe((data: any) => {

        this.person = data;

      });

    // Retrieve movies actor appeared in
    this.movieService
      .getPersonMovieCredits(personId)
      .subscribe((data: any) => {

        this.movies = data.cast;

      });

  }

}