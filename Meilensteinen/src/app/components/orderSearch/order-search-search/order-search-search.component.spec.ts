import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderSearchSearchComponent} from './order-search-search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {RouterTestingModule} from '@angular/router/testing';

describe('OrderSearchSearchComponent', () => {
    let component: OrderSearchSearchComponent;
    let fixture: ComponentFixture<OrderSearchSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, MatSelectModule, RouterTestingModule],
            declarations: [OrderSearchSearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderSearchSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
