import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormNgModelComponentComponent } from './demo-form-ng-model-component.component';

describe('DemoFormNgModelComponentComponent', () => {
  let component: DemoFormNgModelComponentComponent;
  let fixture: ComponentFixture<DemoFormNgModelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormNgModelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormNgModelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
