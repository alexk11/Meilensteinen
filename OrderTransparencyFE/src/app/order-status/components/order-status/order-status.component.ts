import {Component, OnDestroy, OnInit} from '@angular/core';
import {CustomerDisplayService} from '../../services/customer-display.service';
import {NavigationService} from '../../services/navigation-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-order-status',
    templateUrl: './order-status.component.html',
    styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit, OnDestroy {


    constructor(private navigationService: NavigationService, protected customerDisplayService: CustomerDisplayService,
                private activatedRoute: ActivatedRoute) {

    }


    navigateBack() {
        this.navigationService.navigateBack(this.activatedRoute);
    }

    protected getOrderItemId(): number {
        return this.customerDisplayService.getOrderItemId(this.activatedRoute);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }


}
