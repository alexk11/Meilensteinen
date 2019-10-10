import {ICustomer} from './customer.model';
import {IOrderItem} from './orderItem.model';

export class OrderStatus {
  customer: ICustomer;
  orderItem: IOrderItem;

  constructor() {
  }
}
