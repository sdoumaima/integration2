import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRComponent } from './event-r.component';

describe('EventRComponent', () => {
  let component: EventRComponent;
  let fixture: ComponentFixture<EventRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
