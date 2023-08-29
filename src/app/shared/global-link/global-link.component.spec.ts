import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLinkComponent } from './global-link.component';

describe('GlobalLinkComponent', () => {
  let component: GlobalLinkComponent;
  let fixture: ComponentFixture<GlobalLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalLinkComponent]
    });
    fixture = TestBed.createComponent(GlobalLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
