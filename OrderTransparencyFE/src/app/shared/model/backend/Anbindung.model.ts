/**
 *
 * Created by: Alex Kryuchkov
 * 07.10.2019 | 17:46
 * (Short) Description:
 *
 */

import {Location} from "./Location.model";

export interface IAnbindung {
  type: string;
  productInstanceId: string;
  description: string;
  locationRef: string;
  anschlussid: string;
  location: Location;
}

export class Anbindung implements IAnbindung {
  type: string;
  productInstanceId: string;
  description: string;
  locationRef: string;
  anschlussid: string;
  location: Location;

  constructor() {
  }
}
