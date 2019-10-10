import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerDisplayService} from '../../services/customer-display.service';
import {OrderStatusComponent} from '../order-status/order-status.component';
import {NavigationService} from '../../services/navigation-service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-order-status-milestones',
    templateUrl: './order-status-milestones.component.html',
    styleUrls: ['./order-status-milestones.component.scss']
})
export class OrderStatusMilestonesComponent extends OrderStatusComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    constructor(navigationService: NavigationService, customerDisplayService: CustomerDisplayService,
                activatedRoute: ActivatedRoute) {
        super(navigationService, customerDisplayService, activatedRoute);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }

}
