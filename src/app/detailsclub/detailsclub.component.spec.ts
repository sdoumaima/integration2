import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsclubComponent } from './detailsclub.component';

describe('DetailsclubComponent', () => {
  let component: DetailsclubComponent;
  let fixture: ComponentFixture<DetailsclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
