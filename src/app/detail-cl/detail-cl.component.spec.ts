import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClComponent } from './detail-cl.component';

describe('DetailClComponent', () => {
  let component: DetailClComponent;
  let fixture: ComponentFixture<DetailClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
