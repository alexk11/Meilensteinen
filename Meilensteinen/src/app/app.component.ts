import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CustomIconService} from './services/custom-icon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auftragsuebersicht-fe';

  constructor(
      private router: Router,
      private customIconService: CustomIconService
  ) {
    this.customIconService.init();
  }
}
