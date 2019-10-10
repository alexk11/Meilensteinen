import {ICustomer} from './customer.model';
import {OrderItem} from './orderItem.model';
import {CustomerOrderData} from "./backend/CustomerOrderData.model";

export class OrderSearchResponse {
  customer: ICustomer;
  orderItem: OrderItem[];
  //customerOrderData: CustomerOrderData;

  constructor() {
  }
}
