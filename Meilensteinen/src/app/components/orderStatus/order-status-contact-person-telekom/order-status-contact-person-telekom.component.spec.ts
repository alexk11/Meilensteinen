import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentComponent} from '../../content/content.component';
import {OrderSearchResultsComponent} from '../../orderSearch/order-search-results/order-search-results.component';
import {OrderSearchComponent} from '../../orderSearch/order-search/order-search.component';
import {OrderStatusCustomerComponent} from '../order-status-customer/order-status-customer.component';
import {OrderStatusMilestonesComponent} from '../order-status-milestones/order-status-milestones.component';
import {OrderStatusComponent} from '../order-status/order-status.component';

import {OrderStatusContactPersonTelekomComponent} from './order-status-contact-person-telekom.component';
import {MatTableModule} from '@angular/material/table';
import {RouterTestingModule} from '@angular/router/testing';
import {MatPaginatorModule} from '@angular/material/paginator';
import {OrderStatusContactPersonCustomerComponent} from '../order-status-contact-person-customer/order-status-contact-person-customer.component';
import {OrderSearchModule} from '../../../modules/order-search/order-search.module';
import {OrderStatusModule} from '../../../modules/order-status/order-status.module';

describe('OrderStatusContactPersonTelekomComponent', () => {
    let component: OrderStatusContactPersonTelekomComponent;
    let fixture: ComponentFixture<OrderStatusContactPersonTelekomComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatTabsModule,
                MatInputModule,
                MatButtonModule,
                MatFormFieldModule,
                MatTableModule,
                MatSelectModule,
                MatPaginatorModule,
                HttpClientTestingModule,
                BrowserAnimationsModule,
                RouterTestingModule,
                OrderStatusModule],
            declarations: [
                ContentComponent
                ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderStatusContactPersonTelekomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
