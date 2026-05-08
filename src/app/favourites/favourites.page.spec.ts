import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesPage } from './favourites.page';

// Test suite for FavouritesPage component
describe('FavouritesPage', () => {

  let component: FavouritesPage;
  let fixture: ComponentFixture<FavouritesPage>;

  // Runs before each test
  beforeEach(() => {

    // Create component instance
    fixture = TestBed.createComponent(FavouritesPage);

    component = fixture.componentInstance;

    // Trigger Angular change detection
    fixture.detectChanges();

  });

  // Check if component is created successfully
  it('should create', () => {

    expect(component).toBeTruthy();

  });

});