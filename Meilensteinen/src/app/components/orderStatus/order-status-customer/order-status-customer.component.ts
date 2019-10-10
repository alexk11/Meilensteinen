import {Component, OnInit} from '@angular/core';
import {CustomerDisplayComponent} from '../../../model/customer-display-component.model';
import {CustomerDisplayComponentService} from '../../../services/customer-display-component.service';
import {OrderService} from '../../../services/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-status-customer',
  templateUrl: './order-status-customer.component.html',
  styleUrls: ['./order-status-customer.component.scss']
})
export class OrderStatusCustomerComponent implements OnInit {
  customerDisplayComponent: CustomerDisplayComponent;
  orderItemId: number;

  constructor(private customerDisplayComponentService: CustomerDisplayComponentService, private orderService: OrderService,
              private route: ActivatedRoute) {
    this.customerDisplayComponent = new CustomerDisplayComponent('', 0, '', '', '');
  }

  getOrderItemId(): number {
    let orderItemId: number;
    this.route.params.subscribe((params => {
      if (params.id >= 0) {
        orderItemId = params.id;
        return orderItemId;
      }
    }));
    return orderItemId;
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.orderService.getOrderStatusByOrderItemId(this.orderItemId).subscribe(data => {
      this.customerDisplayComponent.setCustomerName = data.customer.name;
      this.customerDisplayComponent.setCustomerNumber = data.customer.customerId;
      data.orderItem.filter(ot => {
        if (this.getOrderItemId() == ot.orderItemId) {
          this.customerDisplayComponent.setOrderPositionNumber = ot.orderItemNo;
          this.customerDisplayComponent.setProvidedAddress = ot.address;
          this.customerDisplayComponent.setProduct = ot.product.productName;
        }
      });
    });
  }

}
