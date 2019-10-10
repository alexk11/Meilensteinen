/**
 *
 * Created by: Alex Kryuchkov
 * 07.10.2019 | 17:46
 * (Short) Description:
 *
 */

import {CsvImportData} from './CsvImportData.model';
import {AmkCustomerData} from './AmkCustomerData.model';

export interface ICustomerOrderData {
  csvImportData: CsvImportData;
  amkCustomerData: AmkCustomerData;
}

export class CustomerOrderData implements ICustomerOrderData {
  csvImportData: CsvImportData;
  amkCustomerData: AmkCustomerData;

  constructor() {
  }
}
