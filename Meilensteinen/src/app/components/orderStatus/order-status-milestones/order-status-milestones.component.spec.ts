import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderStatusMilestonesComponent } from './order-status-milestones.component';

describe('OrderStatusMilestonesComponent', () => {
  let component: OrderStatusMilestonesComponent;
  let fixture: ComponentFixture<OrderStatusMilestonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderStatusMilestonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatusMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
