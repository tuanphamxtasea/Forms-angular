import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormWithValidationExplicitComponentComponent } from './demo-form-with-validation-explicit-component.component';

describe('DemoFormWithValidationExplicitComponentComponent', () => {
  let component: DemoFormWithValidationExplicitComponentComponent;
  let fixture: ComponentFixture<DemoFormWithValidationExplicitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationExplicitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidationExplicitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
