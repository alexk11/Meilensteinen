/**
 *
 * Created by: Alex Kryuchkov
 * 09.10.2019 | 14:46
 * (Short) Description:
 *
 */
import {IOrderStatusItem, OrderStatusItem} from './orderStatusItem.model';

export interface IOrderStatusItemExt extends IOrderStatusItem {
  icon: string;
}

export class OrderStatusItemExt extends OrderStatusItem implements IOrderStatusItemExt {
  icon: string;

  constructor() {
    super();
  }
}
