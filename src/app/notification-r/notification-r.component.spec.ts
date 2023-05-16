import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRComponent } from './notification-r.component';

describe('NotificationRComponent', () => {
  let component: NotificationRComponent;
  let fixture: ComponentFixture<NotificationRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
