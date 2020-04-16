import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCatComponent } from './spinner-cat.component';

describe('SpinnerCatComponent', () => {
  let component: SpinnerCatComponent;
  let fixture: ComponentFixture<SpinnerCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
