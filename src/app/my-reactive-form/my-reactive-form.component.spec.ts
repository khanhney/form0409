import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactiveFormComponent } from './my-reactive-form.component';

describe('MyReactiveFormComponent', () => {
  let component: MyReactiveFormComponent;
  let fixture: ComponentFixture<MyReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
