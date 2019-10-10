export interface Customer {
  customerId: number;
  name: string;
}

export interface Address {
  street: string;
  houseNo: string;
  zip: number;
  city: string;
}
export interface Document {
  link: string;
  title: string;
  type: string;
}

export interface Processing {
  stepNr: number;
  name: string;
  date: string;
  commentDTAG: string;
}

export interface OrderItem {
  orderItemId: number;
  orderItemNo: string;
  address: Address;
  product: Product;
  contactPersonsCustomer: ContactPersonCustomer[];
  contactPersonsTelekom: ContactPersonTelekom[];
  additionalInfo: AdditionalInfo;
  documents: Document[];
  processing: Processing[];
}

export interface Order {
  orderId: string;
  orderItem: OrderItem[];
}

export interface Product {
  productId: number;
  productName: string;
}
export interface ContactPersonCustomer {
  salutation: string;
  name: string;
  phone: string;
  mobile: string;
  email: string;
  role: string;
}

export interface ContactPersonTelekom {
  salutation: string;
  name: string;
  phone: string;
  mobile: string;
  email: string;
  role: string;
}

export interface AdditionalInfo {
  label: string;
  value: string;
  hint: string;
}

export interface RootObject {
  customer: Customer;
  order: Order;
  product: Product;
  address: Address;
  document: Document;
  processing: Processing;
  link: string;
  contactPersonsCustomer: ContactPersonCustomer;
  contactPersonsTelekom: ContactPersonTelekom;
  additionalInfo: AdditionalInfo;
}
