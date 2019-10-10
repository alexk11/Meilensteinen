import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {OrderSearchResponse} from '../../shared/model/order.search.response.model';
import {catchError} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class CustomerDisplayService {


    constructor(private http: HttpClient) {
    }

    public getOrderItemId(activatedRoute: ActivatedRoute): number {
        let orderItemId: number;
        activatedRoute.params.subscribe((params => {
            const id = parseInt(params.id, 10);

            if (!isNaN(id) && id >= 0) {
                orderItemId = id;
                return orderItemId;
            }
        }));
        return orderItemId;
    }

    public getOrderStatusByOrderItemId(orderItemId: number): Observable<OrderSearchResponse> {
        const url = '/app/shared/model/order.search.response.json';
        return this.http.get<OrderSearchResponse>(url).pipe(
            catchError(this.handleError)
        );
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
