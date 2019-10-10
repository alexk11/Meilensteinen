import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../../services/order.service';

@Component({
    selector: 'app-order-status',
    templateUrl: './order-status.component.html',
    styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  constructor(public orderService: OrderService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    goBack() {
        const searchType = this.route.snapshot.paramMap.get('searchType');
        const searchTerm = this.route.snapshot.paramMap.get('searchTerm');
        this.router.navigate(['/ordersearch', {searchType, searchTerm}]);
    }
}
