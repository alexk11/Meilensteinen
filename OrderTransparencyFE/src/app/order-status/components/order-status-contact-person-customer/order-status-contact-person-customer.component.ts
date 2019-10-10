import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactPersonCustomer} from '../../../shared/model/contactPersonCustomer.model';
import {CustomerDisplayService} from '../../services/customer-display.service';
import {OrderStatusComponent} from '../order-status/order-status.component';
import {NavigationService} from '../../services/navigation-service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-order-status-contact-person-customer',
    templateUrl: './order-status-contact-person-customer.component.html',
    styleUrls: ['./order-status-contact-person-customer.component.scss']
})
export class OrderStatusContactPersonCustomerComponent extends OrderStatusComponent implements OnInit, OnDestroy {

    displayedColumns = ['role', 'salutation', 'name', 'phone', 'mobile', 'email'];
    dataSource: ContactPersonCustomer[];
    customerName: string;
    customerNo: number;
    orderItemNo: string;
    orderItemId: number;

    subscription: Subscription;

    constructor(navigationService: NavigationService, customerDisplayService: CustomerDisplayService,
                activatedRoute: ActivatedRoute) {
        super(navigationService, customerDisplayService, activatedRoute);
    }


    ngOnInit(): void {
        this.loadData();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private loadData() {
        this.subscription = this.customerDisplayService.getOrderStatusByOrderItemId(this.orderItemId).subscribe(data => {
            // this.customerName = data.customer.name;
            // this.customerNo = data.customer.customerId;
            // data.orderItem.filter(ot => {
            //     if (this.getOrderItemId() === ot.orderItemId) {
            //         this.dataSource = ot.contactPersonsCustomer;
            //         this.orderItemNo = ot.orderItemNo;
            //     }
            // });
        });
    }

}
