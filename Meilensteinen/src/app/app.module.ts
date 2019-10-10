import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentComponent} from './components/content/content.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {LoginComponent} from './components/login/login/login.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusAdditionalInformationComponent} from './components/orderStatus/order-status-additional-information/order-status-additional-information.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusContactPersonCustomerComponent} from './components/orderStatus/order-status-contact-person-customer/order-status-contact-person-customer.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusContactPersonTelekomComponent} from './components/orderStatus/order-status-contact-person-telekom/order-status-contact-person-telekom.component';
import {OrderStatusCustomerComponent} from './components/orderStatus/order-status-customer/order-status-customer.component';
import {OrderStatusDocumentsComponent} from './components/orderStatus/order-status-documents/order-status-documents.component';
import {OrderStatusMilestonesComponent} from './components/orderStatus/order-status-milestones/order-status-milestones.component';
import {OrderStatusComponent} from './components/orderStatus/order-status/order-status.component';
import {TruncatePipe} from './pipes/truncate.pipe';
import {CustomPaginator} from './share/custom-paginator';
import {OrderSearchModule} from './modules/order-search/order-search.module';
import {OrderStatusModule} from './modules/order-status/order-status.module';
import {MatIconModule} from '@angular/material';
import {CustomIconService} from './services/custom-icon-service';

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        OrderSearchModule,
        OrderStatusModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatSidenavModule,
        MatIconModule,
    ],
    providers: [
        {
            provide: MatPaginatorIntl,
            useClass: CustomPaginator
        },
        CustomIconService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
