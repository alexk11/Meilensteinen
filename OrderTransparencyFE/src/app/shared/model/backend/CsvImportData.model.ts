/**
 *
 * Created by: Alex Kryuchkov
 * 07.10.2019 | 17:46
 * (Short) Description:
 *
 */

export interface ICsvImportData {
  produktauftragIDQuelle: String;
  crMSalesKonkalAuftragsnummer: String;
  BUCI_KEY: String;
  geschaeftsfallName: String;
  subGeschaeftsfallName: String;
  ONKZ: number;
  asB: number;
  kundennummer: String;
  vbKZBezeichner: String;
  kundensegmentEbene2Bezeicher: String;
  materialnummerText: String;
  initialerKWT: String;
  initialerVLT: String;
  aktuellerVLT: String;
  amKBearbeitungsstatus: String;
  bandbreiteErstanbindungHPSMaterialNr: String;
  bandbreiteErstanbindungHPSBandbreiteText: String;
  bandbreiteZweitanbindungHPSMaterialNr: String;
  bandbreiteZweitanbindungHPSText: String;
  auftragseingangDTAG: String;
  auftragseingangAMK: String;
  siNNummer: String;
    projektkenner: String;
  kopplungskenner: String;
  auftragpositionsnummer: String;
  amKMP1Auftrag: String;
  amKMP1Aufwand: String;
  amKMP1Zeit: String;
  amKMP2Auftrag: String;
  amKMP2Aufwand: String;
  amKMP2Zeit: String;
  amKMP4Auftrag: String;
  amKMP4Aufwand: String;
  amKMP4Zeit: String;
  amKMP5Auftrag: String;
  amKMP5Aufwand: String;
  amKMP5Zeit: String;
  amKMP8Auftrag: String;
  amKMP8Aufwand: String;
  amKMP8Zeit: String;
  amKMP9Auftrag: String;
  amKMP9Aufwand: String;
  amKMP9Zeit: String;
  amKMP14Auftrag: String;
  amKMP14Aufwand: String;
  amKMP14Zeit: String;
  amKMP15aAuftrag: String;
  amKMP15aAufwand: String;
  amKMP15aZeit: String;
  amKMP27Auftrag: String;
  amKMP27Aufwand: String;
  amKMP27Zeit: String;
}

export class CsvImportData implements ICsvImportData {
  produktauftragIDQuelle: String;
  crMSalesKonkalAuftragsnummer: String;
  BUCI_KEY: String;
  geschaeftsfallName: String;
  subGeschaeftsfallName: String;
  ONKZ: number;
  asB: number;
  kundennummer: String;
  vbKZBezeichner: String;
  kundensegmentEbene2Bezeicher: String;
  materialnummerText: String;
  initialerKWT: String;
  initialerVLT: String;
  aktuellerVLT: String;
  amKBearbeitungsstatus: String;
  bandbreiteErstanbindungHPSMaterialNr: String;
  bandbreiteErstanbindungHPSBandbreiteText: String;
  bandbreiteZweitanbindungHPSMaterialNr: String;
  bandbreiteZweitanbindungHPSText: String;
  auftragseingangDTAG: String;
  auftragseingangAMK: String;
  siNNummer: String;
  projektkenner: String;
  kopplungskenner: String;
  auftragpositionsnummer: String;
  amKMP1Auftrag: String;
  amKMP1Aufwand: String;
  amKMP1Zeit: String;
  amKMP2Auftrag: String;
  amKMP2Aufwand: String;
  amKMP2Zeit: String;
  amKMP4Auftrag: String;
  amKMP4Aufwand: String;
  amKMP4Zeit: String;
  amKMP5Auftrag: String;
  amKMP5Aufwand: String;
  amKMP5Zeit: String;
  amKMP8Auftrag: String;
  amKMP8Aufwand: String;
  amKMP8Zeit: String;
  amKMP9Auftrag: String;
  amKMP9Aufwand: String;
  amKMP9Zeit: String;
  amKMP14Auftrag: String;
  amKMP14Aufwand: String;
  amKMP14Zeit: String;
  amKMP15aAuftrag: String;
  amKMP15aAufwand: String;
  amKMP15aZeit: String;
  amKMP27Auftrag: String;
  amKMP27Aufwand: String;
  amKMP27Zeit: String;

  constructor() {
  }
}
