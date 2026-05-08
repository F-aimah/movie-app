import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,

  // Components used in this page
  imports: [
    CommonModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})

export class FavouritesPage implements OnInit {

  // Store favourite movies
  favourites: any[] = [];

  constructor() {}

  // Load favourites when page opens
  ngOnInit() {

    // Retrieve favourites from local storage
    const savedMovies = localStorage.getItem('favourites');

    if (savedMovies) {

      this.favourites = JSON.parse(savedMovies);

    }

  }

  // Remove selected movie from favourites
  removeFavourite(movie: any) {

    this.favourites = this.favourites.filter(
      fav => fav.id !== movie.id
    );

    // Update local storage after removal
    localStorage.setItem(
      'favourites',
      JSON.stringify(this.favourites)
    );

  }

}