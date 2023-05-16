import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingRComponent } from './coworking-r.component';

describe('CoworkingRComponent', () => {
  let component: CoworkingRComponent;
  let fixture: ComponentFixture<CoworkingRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkingRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoworkingRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
