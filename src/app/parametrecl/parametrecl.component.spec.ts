import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreclComponent } from './parametrecl.component';

describe('ParametreclComponent', () => {
  let component: ParametreclComponent;
  let fixture: ComponentFixture<ParametreclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametreclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametreclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
