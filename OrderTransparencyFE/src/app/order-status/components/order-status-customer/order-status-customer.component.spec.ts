import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderStatusCustomerComponent} from './order-status-customer.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderStatusModule} from '../../order-status.module';

describe('OrderStatusCustomerComponent', () => {
    let component: OrderStatusCustomerComponent;
    let fixture: ComponentFixture<OrderStatusCustomerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule,
                HttpClientTestingModule,
                OrderStatusModule
            ],
            declarations: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderStatusCustomerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
