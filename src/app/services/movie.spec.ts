import { TestBed } from '@angular/core/testing';

// Import MovieService
import { MovieService } from './movie';

// Test suite for MovieService
describe('MovieService', () => {

  let service: MovieService;

  // Runs before each test
  beforeEach(() => {

    TestBed.configureTestingModule({});

    // Create service instance
    service = TestBed.inject(MovieService);

  });

  // Check if service is created successfully
  it('should be created', () => {

    expect(service).toBeTruthy();

  });

});