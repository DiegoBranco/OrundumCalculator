import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrundumInputComponent } from './orundum-input.component';

describe('OrundumInputComponent', () => {
  let component: OrundumInputComponent;
  let fixture: ComponentFixture<OrundumInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrundumInputComponent]
    });
    fixture = TestBed.createComponent(OrundumInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
