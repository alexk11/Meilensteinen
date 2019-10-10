import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderStatusAdditionalInformationComponent} from './order-status-additional-information.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {OrderStatusModule} from '../../order-status.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('OrderStatusAdditionalInformationComponent', () => {
    let component: OrderStatusAdditionalInformationComponent;
    let fixture: ComponentFixture<OrderStatusAdditionalInformationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatTableModule,
                MatTooltipModule,
                OrderStatusModule,
                HttpClientTestingModule,
                RouterTestingModule],
            declarations: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderStatusAdditionalInformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
