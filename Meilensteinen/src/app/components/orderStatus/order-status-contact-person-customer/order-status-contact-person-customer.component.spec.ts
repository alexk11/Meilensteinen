import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrderStatusContactPersonCustomerComponent} from './order-status-contact-person-customer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrderSearchResultsComponent} from '../../orderSearch/order-search-results/order-search-results.component';
import {ContentComponent} from '../../content/content.component';
import {OrderStatusComponent} from '../order-status/order-status.component';
import {OrderStatusCustomerComponent} from '../order-status-customer/order-status-customer.component';
import {OrderSearchComponent} from '../../orderSearch/order-search/order-search.component';
import {OrderStatusMilestonesComponent} from '../order-status-milestones/order-status-milestones.component';
import {MatHeaderCell, MatTable, MatTableModule} from '@angular/material/table';
import {RouterTestingModule} from '@angular/router/testing';
import {MatPaginatorModule} from '@angular/material/paginator';
import {OrderSearchModule} from '../../../modules/order-search/order-search.module';
import {OrderStatusModule} from '../../../modules/order-status/order-status.module';

describe('OrderStatusContactPersonCustomerComponent', () => {
  let component: OrderStatusContactPersonCustomerComponent;
  let fixture: ComponentFixture<OrderStatusContactPersonCustomerComponent>;

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
    fixture = TestBed.createComponent(OrderStatusContactPersonCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
