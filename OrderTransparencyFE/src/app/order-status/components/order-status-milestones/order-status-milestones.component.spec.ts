import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderStatusMilestonesComponent} from './order-status-milestones.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('OrderStatusMilestonesComponent', () => {
    let component: OrderStatusMilestonesComponent;
    let fixture: ComponentFixture<OrderStatusMilestonesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [OrderStatusMilestonesComponent]
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
