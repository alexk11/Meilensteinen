export interface ICustomer {
  customerId: number;
  name: string;
}

export class Customer implements ICustomer {
  customerId: number;
  name: string;
}
