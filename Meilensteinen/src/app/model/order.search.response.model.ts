import {ICustomer} from './customer.model';
import {OrderItem} from './orderItem.model';

export class OrderSearchResponse {
  customer: ICustomer;
  orderItem: OrderItem[];

  constructor() {
  }
}
