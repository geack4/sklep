import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoszykPage } from './koszyk-page';

describe('KoszykPage', () => {
  let component: KoszykPage;
  let fixture: ComponentFixture<KoszykPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoszykPage],
    }).compileComponents();

    fixture = TestBed.createComponent(KoszykPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
