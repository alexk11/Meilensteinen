import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerDisplayService} from '../../services/customer-display.service';
import {OrderStatusComponent} from '../order-status/order-status.component';
import {CustomerDisplayComponent} from '../../../shared/model/customer-display-component.model';
import {NavigationService} from '../../services/navigation-service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-order-status-customer',
    templateUrl: './order-status-customer.component.html',
    styleUrls: ['./order-status-customer.component.scss']
})
export class OrderStatusCustomerComponent extends OrderStatusComponent implements OnInit, OnDestroy {
    orderItemId: number;
    customerDisplayComponent: CustomerDisplayComponent;

    subscription: Subscription;

    constructor(navigationService: NavigationService, customerDisplayService: CustomerDisplayService,
                activatedRoute: ActivatedRoute) {
        super(navigationService, customerDisplayService, activatedRoute);
        this.customerDisplayComponent = new CustomerDisplayComponent
        ('', 0, '', '', '');
    }


    ngOnInit(): void {
        this.loadData();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    loadData() {
        this.subscription = this.customerDisplayService.getOrderStatusByOrderItemId(this.orderItemId).subscribe(data => {
            // this.customerDisplayComponent.setCustomerName = data.customer.name;
            // this.customerDisplayComponent.setCustomerNumber = data.customer.customerId;
            // data.orderItem.filter(ot => {
            //     if (this.getOrderItemId() === ot.orderItemId) {
            //         this.customerDisplayComponent.setOrderPositionNumber = ot.orderItemNo;
            //         this.customerDisplayComponent.setProvidedAddress = ot.address;
            //         this.customerDisplayComponent.setProduct = ot.product.productName;
            //     }
            // });
        });
    }

}
