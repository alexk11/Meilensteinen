import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContactPersonCustomer} from '../../../model/contactPersonCustomer.model';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-order-status-contact-person-customer',
  templateUrl: './order-status-contact-person-customer.component.html',
  styleUrls: ['./order-status-contact-person-customer.component.scss']
})
export class OrderStatusContactPersonCustomerComponent implements OnInit {

  private displayedColumns = ['role', 'salutation', 'name', 'phone', 'mobile', 'email'];
  private dataSource: ContactPersonCustomer[];
  private customerName: string;
  private customerNo: number;
  private orderItemNo: string;
  private orderItemId: number;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {

  }

  private getOrderItemId(): number {
    let orderItemId: number;
    this.route.params.subscribe((params => {
      const id = parseInt(params.id, 10);

      if (!isNaN(id) && id >= 0) {
        orderItemId = id;
        return orderItemId;
      }
    }));
    return orderItemId;
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.orderService.getOrderStatusByOrderItemId(this.orderItemId).subscribe(data => {
      this.customerName = data.customer.name;
      this.customerNo = data.customer.customerId;
      data.orderItem.filter(ot => {
        if (this.getOrderItemId() === ot.orderItemId) {
          this.dataSource = ot.contactPersonsCustomer;
          this.orderItemNo = ot.orderItemNo;
        }
      });
    });
  }

}
