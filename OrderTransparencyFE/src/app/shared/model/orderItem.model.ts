import {ContactPersonCustomer} from './contactPersonCustomer.model';
import {ContactPersonTelekom} from './contactPersonTelekom.model';
import {IOrderItem} from './orderItem.model';
import {Product} from './product.model';
import {AddInfoItem} from './addInfoItem.model';
import {DocumentImpl} from './documet.model';
import {ProcessingImpl} from "./processing.model";

export interface IOrderItem {
  orderItemId: number;
  orderItemNo: string;
  address: string;
  product: Product;
  contactPersonsCustomer: ContactPersonCustomer[];
  contactPersonsTelekom: ContactPersonTelekom[];
  additionalInfo: AddInfoItem[];
  documents: DocumentImpl[];
  processing: ProcessingImpl[]
}

export class OrderItem implements IOrderItem {
  orderItemId: number;
  orderItemNo: string;
  address: string;
  product: Product;
  contactPersonsCustomer: ContactPersonCustomer[];
  contactPersonsTelekom: ContactPersonTelekom[];
  additionalInfo: AddInfoItem[];
  documents: DocumentImpl[];
  processing: ProcessingImpl[]

  constructor() {
  }
}

