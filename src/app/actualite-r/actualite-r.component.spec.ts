import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteRComponent } from './actualite-r.component';

describe('ActualiteRComponent', () => {
  let component: ActualiteRComponent;
  let fixture: ComponentFixture<ActualiteRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
