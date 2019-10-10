import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderSearchComponent} from './order-search.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderSearchModule} from '../../order-search.module';
import {OrderStatusModule} from '../../../order-status/order-status.module';

describe('OrderSearchComponent', () => {
    let component: OrderSearchComponent;
    let fixture: ComponentFixture<OrderSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // tslint:disable-next-line:max-line-length
            imports: [ReactiveFormsModule,
                MatTabsModule,
                MatInputModule,
                MatButtonModule,
                MatFormFieldModule,
                MatSelectModule,
                HttpClientTestingModule,
                BrowserAnimationsModule,
                OrderSearchModule,
                OrderStatusModule],
            declarations: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
