import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostclubComponent } from './postclub.component';

describe('PostclubComponent', () => {
  let component: PostclubComponent;
  let fixture: ComponentFixture<PostclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
