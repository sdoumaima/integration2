import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoworkingClComponent } from './coworking-cl.component';

describe('CoworkingClComponent', () => {
  let component: CoworkingClComponent;
  let fixture: ComponentFixture<CoworkingClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoworkingClComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoworkingClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
