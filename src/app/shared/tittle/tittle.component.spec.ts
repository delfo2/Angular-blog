import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TittleComponent } from './tittle.component';

describe('TittleComponent', () => {
  let component: TittleComponent;
  let fixture: ComponentFixture<TittleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TittleComponent]
    });
    fixture = TestBed.createComponent(TittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
