import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecretureComponent } from './recreture.component';

describe('RecretureComponent', () => {
  let component: RecretureComponent;
  let fixture: ComponentFixture<RecretureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecretureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecretureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
