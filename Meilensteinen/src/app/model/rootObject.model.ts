import {Address} from './address.model';
import {ContactPersonCustomer} from './contactPersonCustomer.model';
import {ContactPersonTelekom} from './contactPersonTelekom.model';
import {ICustomer} from './customer.model';
import {AdditionalInfo} from './model';
import {Order} from './order.model';
import {Product} from './product.model';


export interface RootObject {
  customer: ICustomer;
  order: Order;
  product: Product;
  address: Address;
  document: Document;
  link: string;
  contactPersonCustomer: ContactPersonCustomer;
  contactPersonTelekom: ContactPersonTelekom;
  additionalInfo: AdditionalInfo;
}
