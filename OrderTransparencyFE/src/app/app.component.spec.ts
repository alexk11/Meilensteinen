import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppRoutingModule} from './app-routing.module';
import {ContentComponent} from './components/content/content.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {OrderStatusModule} from './order-status/order-status.module';
import {OrderSearchModule} from './order-search/order-search.module';
import {AppComponent} from './app.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        OrderSearchModule,
        OrderStatusModule,
        AppRoutingModule
      ],
      declarations: [
        ContentComponent,
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

  it(`should have as title 'auftragsuebersicht-fe'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('auftragsuebersicht-fe');
    });

});
