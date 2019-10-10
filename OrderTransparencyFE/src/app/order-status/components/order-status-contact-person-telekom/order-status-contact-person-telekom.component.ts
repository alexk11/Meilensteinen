import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactPersonTelekom} from '../../../shared/model/contactPersonTelekom.model';
import {CustomerDisplayService} from '../../services/customer-display.service';
import {OrderStatusComponent} from '../order-status/order-status.component';
import {NavigationService} from '../../services/navigation-service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

/**
 *
 * Created by: Sebastian Wegener
 * 02.10.2019 | 16:57
 * Description:
 * Provides the logic necessary to extract a variable from the url and use it to request data from the customerDisplayService.
 * Then sorts the data to only display the relevant information. This latter part will be moved to the backend in the coming Sprint.
 *
 */

@Component({
    selector: 'app-order-status-contact-person-telekom',
    templateUrl: './order-status-contact-person-telekom.component.html',
    styleUrls: ['./order-status-contact-person-telekom.component.scss']
})
export class OrderStatusContactPersonTelekomComponent extends OrderStatusComponent implements OnInit, OnDestroy {

    displayedColumns = ['role', 'salutation', 'name', 'phone', 'mobile', 'email'];
    dataSource: ContactPersonTelekom[];
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

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private loadData() {
        this.subscription = this.customerDisplayService.getOrderStatusByOrderItemId(this.orderItemId).subscribe(data => {
            // this.customerName = data.customer.name;
            // this.customerNo = data.customer.customerId;
            // data.orderItem.filter(ot => {
            //     if (this.getOrderItemId() === ot.orderItemId) {
            //         this.dataSource = ot.contactPersonsTelekom;
            //         this.orderItemNo = ot.orderItemNo;
            //     }
            // });
        });
    }
}
