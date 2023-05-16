import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcowComponent } from './detailcow.component';

describe('DetailcowComponent', () => {
  let component: DetailcowComponent;
  let fixture: ComponentFixture<DetailcowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
