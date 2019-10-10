import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderSearchResultsComponent} from './order-search-results.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrderSearchModule} from '../../order-search.module';
import {OrderStatusModule} from '../../../order-status/order-status.module';

describe('OrderSearchResultsComponent', () => {
    let component: OrderSearchResultsComponent;
    let fixture: ComponentFixture<OrderSearchResultsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            // tslint:disable-next-line:max-line-length
            imports: [MatTabsModule,
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
        fixture = TestBed.createComponent(OrderSearchResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
