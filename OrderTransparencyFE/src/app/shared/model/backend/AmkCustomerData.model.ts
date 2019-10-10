/**
 *
 * Created by: Alex Kryuchkov
 * 07.10.2019 | 17:19
 * (Short) Description:
 *
 */

import {Anbindung} from './Anbindung.model'

export interface IAmkCustomerData {
  businessPartnerRef: String;
  buciKey: String;
  organisationsName: String;
  anbindungen: Anbindung[];
}

export class AmkCustomerData implements IAmkCustomerData {
  businessPartnerRef: String;
  buciKey: String;
  organisationsName: String;
  anbindungen: Anbindung[];

  constructor() {
  }
}
