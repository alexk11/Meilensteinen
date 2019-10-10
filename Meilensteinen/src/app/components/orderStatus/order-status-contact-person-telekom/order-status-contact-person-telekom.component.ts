import {Component, OnInit} from '@angular/core';
import {ContactPersonTelekom} from '../../../model/contactPersonTelekom.model';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-order-status-contact-person-telekom',
  templateUrl: './order-status-contact-person-telekom.component.html',
  styleUrls: ['./order-status-contact-person-telekom.component.scss']
})
export class OrderStatusContactPersonTelekomComponent implements OnInit {

  private displayedColumns = ['role', 'salutation', 'name', 'phone', 'mobile', 'email'];
  private dataSource: ContactPersonTelekom[];
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
          this.dataSource = ot.contactPersonsTelekom;
          this.orderItemNo = ot.orderItemNo;
        }
      });
    });
  }
}
