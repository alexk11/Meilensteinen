/**
 *
 * Created by: Alex Kryuchkov
 * 07.10.2019 | 17:19
 * (Short) Description:
 *
 */

import {Postanschrift} from './Postanschrift.model';

export interface ILocation {
  postAnschriftRef: string;
  standortbezeichnung: string;
  anschlussBereich: string;
  ortsnetzKennzahl: string;
  standortnummer: string;
  umsatzsteuerKennzeichen: string;
  koordinatenInstallationsstandort: string;
  postAnschrift: Postanschrift;
}

export class Location implements ILocation {
  postAnschriftRef: string;
  standortbezeichnung: string;
  anschlussBereich: string;
  ortsnetzKennzahl: string;
  standortnummer: string;
  umsatzsteuerKennzeichen: string;
  koordinatenInstallationsstandort: string;
  postAnschrift: Postanschrift;

  constructor() {
  }
}


