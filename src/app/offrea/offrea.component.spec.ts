import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreaComponent } from './offrea.component';

describe('OffreaComponent', () => {
  let component: OffreaComponent;
  let fixture: ComponentFixture<OffreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
