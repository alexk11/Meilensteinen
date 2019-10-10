import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderStatusItem} from '../../../model/orderStatusItem.model';
import {OrderService} from '../../../services/order.service';
import {OrderStatusItemExt} from '../../../model/orderStatusItemExt.model';

@Component({
  selector: 'app-order-status-milestones',
  templateUrl: './order-status-milestones.component.html',
  styleUrls: ['./order-status-milestones.component.scss']
})
export class OrderStatusMilestonesComponent implements OnInit {

  private displayedColumns = ['icon', 'stepName', 'dueDate', 'comment'];
  private backendData: OrderStatusItem[];
  private dataSource: OrderStatusItemExt[];

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
       this.customerNo = data.customer.customerId;
       data.orderItem.filter(ot => {
         if (this.getOrderItemId() === ot.orderItemId) {
            this.backendData = ot.orderStatus;
            this.orderItemNo = ot.orderItemNo;
            this.createDataSource();
         }
       });
    });
  }

  private createDataSource() {
    this.dataSource = new Array<OrderStatusItemExt>();
    this.backendData.forEach((obj) => {
        const item = Object.assign(obj, {
          icon: 'green_circle'
        });
        this.dataSource.push(item);
    });
    console.log('dataSource tst :: ' + this.dataSource[0].commentDTAG);
  }

}
