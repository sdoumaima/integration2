import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationClComponent } from './notification-cl.component';

describe('NotificationClComponent', () => {
  let component: NotificationClComponent;
  let fixture: ComponentFixture<NotificationClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationClComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
