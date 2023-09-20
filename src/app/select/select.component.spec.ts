import { ComponentFixture, TestBed } from '@angular/core/testing';

import { selectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: selectComponent;
  let fixture: ComponentFixture<selectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [selectComponent]
    });
    fixture = TestBed.createComponent(selectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
