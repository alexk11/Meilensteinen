export class CustomerDisplayComponent {
  private customerName: string;
  private customerNumber: number;
  private orderPositionNumber: string;
  private providedAddress: string;
  private product: string;

  constructor(customerName: string, customerNumber: number,
              orderPositionNumber: string, providedAddress: string, product: string) {
    this.customerName = customerName;
    this.customerNumber = customerNumber;
    this.orderPositionNumber = orderPositionNumber;
    this.providedAddress = providedAddress;
    this.product = product;
  }

  getCustomerName() {
    return this.customerName;
  }

  getCustomerNumber() {
    return this.customerNumber;
  }

  getOrderPositionNumber() {
    return this.orderPositionNumber;
  }

  getProvidedAddress() {
    return this.providedAddress;
  }

  getProduct() {
    return this.product;
  }

  set setCustomerName(value: string) {
    this.customerName = value;
  }

  set setCustomerNumber(value: number) {
    this.customerNumber = value;
  }

  set setOrderPositionNumber(value: string) {
    this.orderPositionNumber = value;
  }

  set setProvidedAddress(value: string) {
    this.providedAddress = value;
  }

  set setProduct(value: string) {
    this.product = value;
  }
}
