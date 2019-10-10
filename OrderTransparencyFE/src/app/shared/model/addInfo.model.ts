import {IAddInfoItem} from './addInfoItem.model';


export interface IAddInfo {
  cableDesignation: IAddInfoItem;
  ipAddressRange: IAddInfoItem;
  subscriptionId: IAddInfoItem;
  connectionId: IAddInfoItem;
  lineId: IAddInfoItem;
  productGateRemoteDevice: IAddInfoItem;
  productGateSfpModul: IAddInfoItem;
  projectExpert: IAddInfoItem;
  connectionExpert: IAddInfoItem;
  sinNo: IAddInfoItem;
}

export class AddInfo implements IAddInfo {
  cableDesignation: IAddInfoItem;
  ipAddressRange: IAddInfoItem;
  subscriptionId: IAddInfoItem;
  connectionId: IAddInfoItem;
  lineId: IAddInfoItem;
  productGateRemoteDevice: IAddInfoItem;
  productGateSfpModul: IAddInfoItem;
  projectExpert: IAddInfoItem;
  connectionExpert: IAddInfoItem;
  sinNo: IAddInfoItem;
}
