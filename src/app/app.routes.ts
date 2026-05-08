import { Routes } from '@angular/router';

// Application routes
export const routes: Routes = [

  // Redirect empty path to home page
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Home page route
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  // Movie details page route
  {
    path: 'movie-details/:id',
    loadComponent: () =>
      import('./movie-details/movie-details.page').then(
        (m) => m.MovieDetailsPage
      ),
  },

  // Favourites page route
  {
    path: 'favourites',
    loadComponent: () =>
      import('./favourites/favourites.page').then(
        (m) => m.FavouritesPage
      ),
  },

  // Actor details page route
  {
    path: 'person-details/:id',
    loadComponent: () =>
      import('./person-details/person-details.page').then(
        (m) => m.PersonDetailsPage
      ),
  }

];