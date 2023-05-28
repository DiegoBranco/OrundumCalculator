import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullsOutputComponent } from './pulls-output.component';

describe('PullsOutputComponent', () => {
  let component: PullsOutputComponent;
  let fixture: ComponentFixture<PullsOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PullsOutputComponent]
    });
    fixture = TestBed.createComponent(PullsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
