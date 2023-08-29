import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotNewsCardComponent } from './hot-news-card.component';

describe('HotNewsCardComponent', () => {
  let component: HotNewsCardComponent;
  let fixture: ComponentFixture<HotNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotNewsCardComponent]
    });
    fixture = TestBed.createComponent(HotNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
