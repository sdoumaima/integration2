import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventClComponent } from './event-cl.component';

describe('EventClComponent', () => {
  let component: EventClComponent;
  let fixture: ComponentFixture<EventClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventClComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
