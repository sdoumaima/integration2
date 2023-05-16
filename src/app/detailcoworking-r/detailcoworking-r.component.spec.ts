import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcoworkingRComponent } from './detailcoworking-r.component';

describe('DetailcoworkingRComponent', () => {
  let component: DetailcoworkingRComponent;
  let fixture: ComponentFixture<DetailcoworkingRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcoworkingRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcoworkingRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
