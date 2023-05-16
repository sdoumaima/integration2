import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilaComponent } from './profila.component';

describe('ProfilaComponent', () => {
  let component: ProfilaComponent;
  let fixture: ComponentFixture<ProfilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
