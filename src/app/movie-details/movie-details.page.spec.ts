import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsPage } from './movie-details.page';

// Test suite for MovieDetailsPage component
describe('MovieDetailsPage', () => {

  let component: MovieDetailsPage;
  let fixture: ComponentFixture<MovieDetailsPage>;

  // Runs before each test
  beforeEach(() => {

    // Create component instance
    fixture = TestBed.createComponent(MovieDetailsPage);

    component = fixture.componentInstance;

    // Trigger Angular change detection
    fixture.detectChanges();

  });

  // Check if component is created successfully
  it('should create', () => {

    expect(component).toBeTruthy();

  });

});