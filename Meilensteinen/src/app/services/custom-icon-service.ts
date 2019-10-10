/**
 *
 * Created by: Alex Kryuchkov
 * 09.10.2019 | 16:26
 * (Short) Description:
 *
 */

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
    this.matIconRegistry.addSvgIcon(
      'cool_face',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/cool2.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'green_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/green_circle.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'grey_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/grey_circle.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'yellow_circle',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/yellow_circle.svg')
    );


  }
}
