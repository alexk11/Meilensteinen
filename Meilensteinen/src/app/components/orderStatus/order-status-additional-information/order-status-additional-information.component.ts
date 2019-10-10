import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../../services/order.service';
import {AddInfoItem} from '../../../model/addInfoItem.model';

@Component({
  selector: 'app-order-status-additional-information',
  templateUrl: './order-status-additional-information.component.html',
  styleUrls: ['./order-status-additional-information.component.scss']
})
export class OrderStatusAdditionalInformationComponent implements OnInit {

  private dataSource: AddInfoItem[];
  private displayedColumns: string[] = ['label', 'value', 'hint'];
  orderItemId: number;


  position = new FormControl('above');

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadData();
    this.removeDataWithoutValueFromDataSource();
  }

  // Requirement EVPL-3786: Wird der Wert einer Zusatzinformation nicht gefunden, wird die Zusatzinformation nicht angezeigt.
  private removeDataWithoutValueFromDataSource() {
    if (this.dataSource !== undefined) {
      this.dataSource = this.dataSource.filter(dataItem => dataItem.value.length !== 0);
    }
  }

  getToolTipLabelData(text: string): string {
    const tooltip = this.dataSource.find(i => i.label === text);
    return tooltip.label;
  }

  getToolTipValueData(text: string): string {
    const tooltip = this.dataSource.find(i => i.value === text);
    return tooltip.value;
  }

  getToolTipHintData(text: string): string {
    const tooltip = this.dataSource.find(i => i.hint === text);
    return tooltip.hint;
  }

  checkNeedToolTip(value: string, end: number): boolean {
    return value.length > end;
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

  loadData() {
    this.orderService.getOrderStatusByOrderItemId(this.orderItemId).subscribe(data => {
      data.orderItem.filter(ot => {
        if (this.getOrderItemId() == ot.orderItemId) {
          this.dataSource = ot.additionalInfo;
        }
      });
    });
  }

  isDataSourceEmpty() {
    if (this.dataSource === undefined) {
      return true;
    }
    return this.dataSource.length === 0;
  }

}
