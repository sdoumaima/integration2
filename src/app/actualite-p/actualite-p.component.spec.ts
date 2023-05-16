import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitePComponent } from './actualite-p.component';

describe('ActualitePComponent', () => {
  let component: ActualitePComponent;
  let fixture: ComponentFixture<ActualitePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualitePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualitePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
