import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrepComponent } from './parametrep.component';

describe('ParametrepComponent', () => {
  let component: ParametrepComponent;
  let fixture: ComponentFixture<ParametrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
