import {Component, OnInit} from '@angular/core';
import {DocumentImpl} from 'src/app/model/documet.model';
import {OrderService} from '../../../services/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-status-documents',
  templateUrl: './order-status-documents.component.html',
  styleUrls: ['./order-status-documents.component.scss']
})
export class OrderStatusDocumentsComponent implements OnInit {
  documentList: DocumentImpl[];
  orderItemId: number;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
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
      data.orderItem.filter(ot => {
        if (this.getOrderItemId() === ot.orderItemId) {
          this.documentList = ot.documents;
        }
      });
    });
  }

}
