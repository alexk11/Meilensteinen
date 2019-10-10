import {OrderItem} from './orderItem.model';

export interface IOrder {
  orderId: string;
  orderItem: OrderItem[];
}

export class Order implements IOrder {
  orderItem: OrderItem[];
  orderId: string;

  constructor() {
  }

  public static createOrder(data: Order): Order {
    const order = new Order();
    order.orderId = data.orderId;
    order.orderItem = data.orderItem;
    return order;
  }

}
