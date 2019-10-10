import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {OrderSearchResponse} from '../../../model/order.search.response.model';
import {IOrderItem, OrderItem} from '../../../model/orderItem.model';
import {OrderService} from '../../../services/order.service';
import {SearchType} from '../order-search-search/order-search-search.component';


@Component({
    selector: 'app-order-search-results',
    templateUrl: './order-search-results.component.html',
    styleUrls: ['./order-search-results.component.scss']
})
export class OrderSearchResultsComponent implements OnInit {

    constructor(public orderService: OrderService) {
    }

    private isSearchActive = false;
    private searchType: SearchType;
    private searchTerm: string;

    private customerName: string;
    private customerId: number;
    private displayedColumns: string[] = ['orderItemNo', 'address', 'product'];
    private dataSource;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() {

    }

    getOrderIdFromItemNo(orderItemNo: string): string {
        return orderItemNo.substring(0, orderItemNo.length - 7);
    }

    getOrderItemsByOrderId(orderId: string): void {

        this.searchType = SearchType.ORDER_ID;
        this.searchTerm = orderId;

        const respObj: OrderSearchResponse = new OrderSearchResponse();
        const respOrderItems: IOrderItem[] = new Array<OrderItem>();
        this.orderService.getOrderItemsByOrderId(orderId).subscribe(data => {
            respObj.customer = data.customer;
            respObj.orderItem = data.orderItem.filter(ot => {
                if (this.getOrderIdFromItemNo(ot.orderItemNo).match(orderId)) {
                    respOrderItems.push(ot);
                }
            });
            respOrderItems.forEach(item => {
                respObj.orderItem.push(item);
            });
            this.updateDataSource(respObj);
        });
    }

    getOrderItemsByOrderItemNo(orderItemNo: string): void {

        this.searchType = SearchType.ORDER_ITEM_NO;
        this.searchTerm = orderItemNo;

        const respObj: OrderSearchResponse = new OrderSearchResponse();
        const respOrderItems: IOrderItem[] = new Array<OrderItem>();
        this.orderService.getOrderItemsByOrderItemNo(orderItemNo).subscribe(data => {
            respObj.customer = data.customer;
            respObj.orderItem = data.orderItem.filter(ot => {
                if (orderItemNo === ot.orderItemNo) {
                    respOrderItems.push(ot);
                }
            });
            respOrderItems.forEach(item => {
                respObj.orderItem.push(item);
            });
            this.updateDataSource(respObj);
        });
    }

    getOrderItemsByCustomerId(customerId: string): void {

        this.searchType = SearchType.CUSTOMER_ID;
        this.searchTerm = customerId;

        const respObj: OrderSearchResponse = new OrderSearchResponse();
        this.orderService.getOrderItemsByCustomerId(customerId).subscribe(data => {
            const cId = Number(customerId);
            if (cId === data.customer.customerId) {
                respObj.customer = data.customer;
                respObj.orderItem = data.orderItem;
            }
            this.updateDataSource(respObj);
        });
    }

    updateDataSource(response: OrderSearchResponse): void {
        this.isSearchActive = true;
      if (response.customer !== undefined) {
        this.customerName = response.customer.name;
      }
      if (response.customer !== undefined) {
        this.customerId = response.customer.customerId;
      }
        this.dataSource = new MatTableDataSource(response.orderItem);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    isDataSourceEmpty() {
        if (this.dataSource === undefined || this.dataSource.data === undefined) {
            return true;
        }
        return this.dataSource.data.length === 0;
    }

    isDataSourceEmptyANDsearchActive() {
        return this.isDataSourceEmpty() && this.isSearchActive;
    }
}
