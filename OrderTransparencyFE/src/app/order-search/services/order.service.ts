import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment.dev';
import {OrderSearchResponse} from '../../shared/model/order.search.response.model';
import {CustomerOrderData} from "../../shared/model/backend/CustomerOrderData.model";


@Injectable({
    providedIn: 'root'
})
export class OrderService {
    apiUrl = environment.jsonApi;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    public getOrderItemsByOrderId(orderId: string): Observable<OrderSearchResponse> {
      const url = '/app/shared/model/order.search.response1.json';
      //const url = `${environment.rootUrl}customerOrder/${orderId}`;
      let response = this.http.get<OrderSearchResponse>(url).pipe(
      //let response = this.http.get<CustomerOrderData>(url).pipe(
        catchError(this.handleError));
      return response;
    }

    public getOrderItemsByOrderItemNo(orderItemNo: string): Observable<OrderSearchResponse> {
      const url = '/app/shared/model/order.search.response.json';
      return this.http.get<OrderSearchResponse>(url).pipe(
        catchError(this.handleError));
    }

    public getOrderItemsByCustomerId(customerId: string): Observable<OrderSearchResponse> {
      const url = '/app/shared/model/order.search.response.json';
      return this.http.get<OrderSearchResponse>(url).pipe(
        catchError(this.handleError));
    }


    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}
