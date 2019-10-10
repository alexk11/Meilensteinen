import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderStatusComponent} from './order-status.component';
import {OrderStatusCustomerComponent} from '../order-status-customer/order-status-customer.component';
import {OrderStatusMilestonesComponent} from '../order-status-milestones/order-status-milestones.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusContactPersonCustomerComponent} from '../order-status-contact-person-customer/order-status-contact-person-customer.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusContactPersonTelekomComponent} from '../order-status-contact-person-telekom/order-status-contact-person-telekom.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusAdditionalInformationComponent} from '../order-status-additional-information/order-status-additional-information.component';
import {OrderStatusDocumentsComponent} from '../order-status-documents/order-status-documents.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrderStatusModule} from '../../../modules/order-status/order-status.module';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('OrderStatusComponent', () => {
    let component: OrderStatusComponent;
    let fixture: ComponentFixture<OrderStatusComponent>;

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
                OrderStatusModule,
                RouterTestingModule],
            declarations: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
       expect(component).toBeTruthy();
     });
});
