/**
 *
 * Created by: Alex Kryuchkov
 * 07.10.2019 | 17:46
 * (Short) Description:
 *
 */

export interface IPostanschrift {
  adressTyp: string;
  klsid: string;
  strasse: string;
  strasseKurz: string;
  hausnummer: string;
  ort: string;
  plz: string;
  laenderschluessel: string;
  land: string;
}

export class Postanschrift implements IPostanschrift {
  adressTyp: string;
  klsid: string;
  strasse: string;
  strasseKurz: string;
  hausnummer: string;
  ort: string;
  plz: string;
  laenderschluessel: string;
  land: string;

  constructor() {
  }
}
