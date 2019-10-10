export interface IOrderStatusItem {
  // icon: string;
  stepNr: number;
  name: string;
  date: string;
  commentDTAG: string;
}

export class OrderStatusItem implements IOrderStatusItem {
  // icon: string;
  stepNr: number;
  name: string;
  date: string;
  commentDTAG: string;

  constructor() {
  }
}
