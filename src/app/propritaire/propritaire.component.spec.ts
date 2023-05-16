import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropritaireComponent } from './propritaire.component';

describe('PropritaireComponent', () => {
  let component: PropritaireComponent;
  let fixture: ComponentFixture<PropritaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropritaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropritaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
