import {Component, OnDestroy, OnInit} from '@angular/core';
import {DocumentImpl} from 'src/app/shared/model/documet.model';
import {CustomerDisplayService} from '../../services/customer-display.service';
import {OrderStatusComponent} from '../order-status/order-status.component';
import {NavigationService} from '../../services/navigation-service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-order-status-documents',
    templateUrl: './order-status-documents.component.html',
    styleUrls: ['./order-status-documents.component.scss']
})
export class OrderStatusDocumentsComponent extends OrderStatusComponent implements OnInit, OnDestroy {
    documentList: DocumentImpl[];
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

    loadData() {
        this.subscription = this.customerDisplayService.getOrderStatusByOrderItemId(this.orderItemId).subscribe(data => {
            // data.orderItem.filter(ot => {
            //     if (this.getOrderItemId() === ot.orderItemId) {
            //         this.documentList = ot.documents;
            //     }
            // });
        });
    }


}
