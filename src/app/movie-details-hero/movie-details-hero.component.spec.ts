import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsHeroComponent } from './movie-details-hero.component';

describe('MovieDetailsHeroComponent', () => {
  let component: MovieDetailsHeroComponent;
  let fixture: ComponentFixture<MovieDetailsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
