import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsPage } from './person-details.page';

// Test suite for PersonDetailsPage
describe('PersonDetailsPage', () => {

  let component: PersonDetailsPage;
  let fixture: ComponentFixture<PersonDetailsPage>;

  // Runs before each test
  beforeEach(() => {

    fixture = TestBed.createComponent(PersonDetailsPage);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  // Check if component is created successfully
  it('should create', () => {

    expect(component).toBeTruthy();

  });

});