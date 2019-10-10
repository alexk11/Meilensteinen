import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {OrderSearchResultsComponent} from '../order-search-results/order-search-results.component';
import {ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-order-search-search',
    templateUrl: './order-search-search.component.html',
    styleUrls: ['./order-search-search.component.scss']
})


export class OrderSearchSearchComponent implements OnInit {

    @Input() private searchResult: OrderSearchResultsComponent;

    orderSearchForm = this.fb.group({
        inOrderId: [''],
        inOrderPosId: [''],
        inCustomerId: [''],
    });

    regexOrderId = '^([1-9]-[0-9]{5,20})$|(K{2}([UV]))([0-9]{5,20})$';
    //regexOrderId = '^([0-9]{5,20})$|(K{2}([UV]))([0-9]{5,20})$';
    regexOrderPosId = '^(([1-9]-[0-9]{5,34})|(k{2}([uv]))([0-9]{5,34}))-[0-9]{6}$';
    regexCustomerId = '^([1-9][0-9]{9})$';

    searchType: SearchType;
    searchTerm: string;

    constructor(private fb: FormBuilder, private route: ActivatedRoute) {
        this.createForm();
    }

    ngOnInit() {
        if (this.isSearchTypeInUrlAvailable()) {
            this.reloadIfBackNavigation();
        }
    }


    private reloadIfBackNavigation() {
        this.searchType = this.route.snapshot.paramMap.get('searchType') as SearchType;
        this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
        this.onOptionsChanged(this.searchType);
        if (this.searchType === SearchType.ORDER_ID) {
          this.f.inOrderId.setValue(this.searchTerm);
          this.searchResult.getOrderItemsByOrderId(this.searchTerm);
        }
        // } else if (this.searchType === SearchType.ORDER_ITEM_NO) {
        //     this.f.inOrderPosId.setValue(this.searchTerm);
        //     this.searchResult.getOrderItemsByOrderItemNo(this.searchTerm);
        // } else if (this.searchType === SearchType.CUSTOMER_ID) {
        //     this.f.inCustomerId.setValue(this.searchTerm);
        //     this.searchResult.getOrderItemsByCustomerId(this.searchTerm);
        // }
    }

    private isSearchTypeInUrlAvailable() {
        return this.route.snapshot.paramMap.get('searchType') === SearchType.ORDER_ID ||
            this.route.snapshot.paramMap.get('searchType') === SearchType.ORDER_ITEM_NO ||
            this.route.snapshot.paramMap.get('searchType') === SearchType.CUSTOMER_ID;
    }

    private get f() {
        return this.orderSearchForm.controls;
    }

    private createForm() {
        this.searchType = SearchType.ORDER_ID;
        this.orderSearchForm = this.fb.group({
            inOrderId: [undefined, [Validators.required, Validators.pattern(new RegExp(this.regexOrderId, 'i'))]],
            inOrderPosId: [undefined],
            inCustomerId: [undefined]
        });
    }

    onOptionsChanged(searchType: SearchType) {

        this.cleanInputFields();

        switch (searchType) {
            case SearchType.ORDER_ID : {
                this.resetValidators();
                this.f.inOrderId.setValidators(
                    [Validators.required, Validators.pattern(new RegExp(this.regexOrderId, 'i'))]);
                this.updateValueValidity();
                break;
            }
            case SearchType.ORDER_ITEM_NO : {
                this.resetValidators();
                this.f.inOrderPosId.setValidators(
                    [Validators.required, Validators.pattern(new RegExp(this.regexOrderPosId, 'i'))]);
                this.updateValueValidity();
                break;
            }
            case SearchType.CUSTOMER_ID : {
                this.resetValidators();
                this.f.inCustomerId.setValidators(
                    [Validators.required, Validators.pattern(new RegExp(this.regexCustomerId, 'i'))]);
                this.updateValueValidity();
                break;
            }
        }
    }


    onSubmit() {
        if (this.searchType === SearchType.ORDER_ID) {
            this.searchResult.getOrderItemsByOrderId(this.f.inOrderId.value);
        }
        // else if (this.searchType === SearchType.ORDER_ITEM_NO) {
        //     this.searchResult.getOrderItemsByOrderItemNo(this.f.inOrderPosId.value);
        // } else if (this.searchType === SearchType.CUSTOMER_ID) {
        //     this.searchResult.getOrderItemsByCustomerId(this.f.inCustomerId.value);
        // }
    }


    private updateValueValidity() {
        this.f.inOrderId.updateValueAndValidity();
        this.f.inOrderPosId.updateValueAndValidity();
        this.f.inCustomerId.updateValueAndValidity();
    }

    private resetValidators() {
        this.f.inOrderId.setValidators(undefined);
        this.f.inOrderPosId.setValidators(undefined);
        this.f.inCustomerId.setValidators(undefined);
    }

    private cleanInputFields() {
        this.f.inOrderId.setValue('');
        this.f.inOrderPosId.setValue('');
        this.f.inCustomerId.setValue('');
    }


}

export enum SearchType {
    ORDER_ID = 'ORDER_ID',
    ORDER_ITEM_NO = 'ORDER_ITEM_NO',
    CUSTOMER_ID = 'CUSTOMER_ID'
}
