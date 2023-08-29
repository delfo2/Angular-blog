import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalNewsCardComponent } from './normal-news-card.component';

describe('NormalNewsCardComponent', () => {
  let component: NormalNewsCardComponent;
  let fixture: ComponentFixture<NormalNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormalNewsCardComponent]
    });
    fixture = TestBed.createComponent(NormalNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
