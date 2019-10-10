import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderStatusDocumentsComponent} from './order-status-documents.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderStatusModule} from '../../order-status.module';

describe('OrderStatusDocumentsComponent', () => {
  let component: OrderStatusDocumentsComponent;
  let fixture: ComponentFixture<OrderStatusDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        RouterTestingModule,
        OrderStatusModule],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatusDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
