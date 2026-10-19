import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNotFound } from './site-not-found';

describe('SiteNotFound', () => {
  let component: SiteNotFound;
  let fixture: ComponentFixture<SiteNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteNotFound],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteNotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
