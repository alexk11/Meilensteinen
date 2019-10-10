import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {AddInfoItem} from '../../../shared/model/addInfoItem.model';
import {CustomerDisplayService} from '../../services/customer-display.service';
import {OrderStatusComponent} from '../order-status/order-status.component';
import {NavigationService} from '../../services/navigation-service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-order-status-additional-information',
    templateUrl: './order-status-additional-information.component.html',
    styleUrls: ['./order-status-additional-information.component.scss']
})
export class OrderStatusAdditionalInformationComponent extends OrderStatusComponent implements OnInit, OnDestroy {

    dataSource: AddInfoItem[];
    displayedColumns: string[] = ['label', 'value', 'hint'];
    orderItemId: number;

    subscription: Subscription;

    position = new FormControl('above');

    constructor(navigationService: NavigationService, customerDisplayService: CustomerDisplayService,
                activatedRoute: ActivatedRoute) {
        super(navigationService, customerDisplayService, activatedRoute);
    }

    ngOnInit(): void {
        this.loadData();
        this.removeDataWithoutValueFromDataSource();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    // Requirement EVPL-3786: Wird der Wert einer Zusatzinformation nicht gefunden, wird die Zusatzinformation nicht angezeigt.
    private removeDataWithoutValueFromDataSource() {
        if (this.dataSource !== undefined) {
            this.dataSource = this.dataSource.filter(dataItem => dataItem.value.length !== 0);
        }
    }

    getToolTipLabelData(text: string): string {
        const tooltip = this.dataSource.find(i => i.label === text);
        return tooltip.label;
    }

    getToolTipValueData(text: string): string {
        const tooltip = this.dataSource.find(i => i.value === text);
        return tooltip.value;
    }

    getToolTipHintData(text: string): string {
        const tooltip = this.dataSource.find(i => i.hint === text);
        return tooltip.hint;
    }

    checkNeedToolTip(value: string, end: number): boolean {
        return value.length > end;
    }


    loadData() {
        this.subscription = this.customerDisplayService.getOrderStatusByOrderItemId(
          this.orderItemId).subscribe(data => {
            // data.customerOrderData.filter(ot => {
            //     if (this.getOrderItemId() === ot.orderItemId) {
            //         this.dataSource = ot.additionalInfo;
            //     }
            // });
        });
    }

    isDataSourceEmpty() {
        if (this.dataSource === undefined) {
            return true;
        }
        return this.dataSource.length === 0;
    }

}
