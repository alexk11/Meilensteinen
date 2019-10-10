import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {IOrderItem, OrderItem} from '../../../shared/model/orderItem.model';
import {OrderService} from '../../services/order.service';
import {SearchType} from '../order-search-search/order-search-search.component';
import {OrderSearchResponse} from '../../../shared/model/order.search.response.model';
import {Subscription} from 'rxjs';
import {ICsvImportData} from "../../../shared/model/backend/CsvImportData.model";
import {IAmkCustomerData} from "../../../shared/model/backend/AmkCustomerData.model";
import {Anbindung, IAnbindung} from "../../../shared/model/backend/Anbindung.model";
import {CustomerOrderData} from "../../../shared/model/backend/CustomerOrderData.model";


@Component({
    selector: 'app-order-search-results',
    templateUrl: './order-search-results.component.html',
    styleUrls: ['./order-search-results.component.scss']
})
export class OrderSearchResultsComponent implements OnInit, OnDestroy {

    constructor(public orderService: OrderService) {
    }

    isSearchActive = false;
    searchType: SearchType;
    searchTerm: string;

    customerName: string;
    customerId: number;
    displayedColumns: string[] = ['orderItemNo', 'address', 'product'];
    dataSource; // = new MatTableDataSource<CustomerOrderData>();

    byOrderIdSubscription: Subscription;
    byOrderItemNoSubscription: Subscription;
    byCustomerIdSubscription: Subscription;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.byOrderIdSubscription !== undefined) {
            this.byOrderIdSubscription.unsubscribe();
        }
        if (this.byOrderItemNoSubscription !== undefined) {
            this.byOrderItemNoSubscription.unsubscribe();
        }
        if (this.byCustomerIdSubscription !== undefined) {
            this.byCustomerIdSubscription.unsubscribe();
        }
    }

    getOrderIdFromItemNo(orderItemNo: string): string {
        return orderItemNo.substring(0, orderItemNo.length - 7);
    }

    // getOrderItemsByOrderId_GL(orderId: string): void {
    //
    //   this.searchType = SearchType.ORDER_ID;
    //   this.searchTerm = orderId;
    //
    //   const respObj: OrderSearchResponse = new OrderSearchResponse();
    //   const respOrderItems: IOrderItem[] = new Array<OrderItem>();
    //   this.byOrderIdSubscription = this.orderService.getOrderItemsByOrderId(orderId).subscribe(data => {
    //     const array = [];
    //     array[0] = data;
    //     console.log(array);
    //     this.refreshTable(array);
    //   });
    // }

    private refreshTable(data): void {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    }

    getOrderItemsByOrderId_back(orderId: string): void {
        this.searchType = SearchType.ORDER_ID;
        this.searchTerm = orderId;

        const respObj: CustomerOrderData = new CustomerOrderData();
        //respObj.customerOrderData = new CustomerOrderData();
        //respObj.csvImportData = new CsvImportData();
        //respObj.amkCustomerData = new AmkCustomerData();
        //const respOrderItems: IOrderItem[] = new Array<OrderItem>();
        //const csvImportData: CsvImportData = new CsvImportData();
        //const amkCustomerData: AmkCustomerData = new AmkCustomerData();

        //respObj.customerOrderData.csvImportData = csvImportData;
        //const anbindungen: IAnbindung[] = new Array<Anbindung>();

        // respObj.customerOrderData.csvImportData = csvImportData;
        // respObj.customerOrderData.amkCustomerData = amkCustomerData;

        this.byOrderIdSubscription = this.orderService.getOrderItemsByOrderId(orderId).subscribe(data => {
            //respObj.amkCustomerData = data.amkCustomerData;
            //respObj.csvImportData = data.csvImportData;

            //respObj = JSON.parse(JSON.stringify(data))
            //respObj.customerOrderData.csvImportData = data.csvImportData;
            //respObj.customerOrderData.amkCustomerData = data.amkCustomerData;
            // respObj.orderItem = data.orderItem.filter(ot => {
            //     if (this.getOrderIdFromItemNo(ot.orderItemNo).match(orderId)) {
            //         respOrderItems.push(ot);
            //     }
            // });
            // respOrderItems.forEach(item => {
            //     respObj.orderItem.push(item);
            // });
            //this.updateDataSource(respObj);
        });
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

    // getOrderItemsByOrderItemNo(orderItemNo: string): void {
    //
    //     this.searchType = SearchType.ORDER_ITEM_NO;
    //     this.searchTerm = orderItemNo;
    //
    //     const respObj: OrderSearchResponse = new OrderSearchResponse();
    //     const respOrderItems: IOrderItem[] = new Array<OrderItem>();
    //     this.byOrderItemNoSubscription = this.orderService.getOrderItemsByOrderItemNo(orderItemNo).subscribe(data => {
    //         respObj.customer = data.customer;
    //         respObj.orderItem = data.orderItem.filter(ot => {
    //             if (orderItemNo === ot.orderItemNo) {
    //                 respOrderItems.push(ot);
    //             }
    //         });
    //         respOrderItems.forEach(item => {
    //             respObj.orderItem.push(item);
    //         });
    //         this.updateDataSource(respObj);
    //     });
    // }

    // getOrderItemsByCustomerId(customerId: string): void {
    //
    //     this.searchType = SearchType.CUSTOMER_ID;
    //     this.searchTerm = customerId;
    //
    //     const respObj: OrderSearchResponse = new OrderSearchResponse();
    //     this.byCustomerIdSubscription = this.orderService.getOrderItemsByCustomerId(customerId).subscribe(data => {
    //         const cId = Number(customerId);
    //         if (cId === data.customer.customerId) {
    //             respObj.customer = data.customer;
    //             respObj.orderItem = data.orderItem;
    //         }
    //         this.updateDataSource(respObj);
    //     });
    // }

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

    updateDataSource_back(response: CustomerOrderData): void {
        this.isSearchActive = true;
        // if (response.csvImportData.kundennummer !== undefined) {
        //     this.customerName = response.customer.name;
        // }
        if (response.csvImportData[0].Kundennummer !== undefined) {
            this.customerId = response.csvImportData[0].Kundennummer.toString();
        }
        //this.dataSource = response;
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
