import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

// Test suite for HomePage component
describe('HomePage', () => {

  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // Runs before each test
  beforeEach(async () => {

    fixture = TestBed.createComponent(HomePage);

    component = fixture.componentInstance;

    // Trigger Angular change detection
    fixture.detectChanges();

  });

  // Check if HomePage component is created successfully
  it('should create', () => {

    expect(component).toBeTruthy();

  });

});