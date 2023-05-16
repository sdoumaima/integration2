import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiteClComponent } from './actualite-cl.component';

describe('ActualiteClComponent', () => {
  let component: ActualiteClComponent;
  let fixture: ComponentFixture<ActualiteClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiteClComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualiteClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
