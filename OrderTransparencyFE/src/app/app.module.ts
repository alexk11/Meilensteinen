import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContentComponent} from './components/content/content.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import {HeaderComponent} from './components/layout/header/header.component';
import {LoginComponent} from './login/components/login/login.component';
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
// tslint:disable-next-line:max-line-length
import {CustomPaginator} from './shared/custom-paginator';
import {OrderSearchModule} from './order-search/order-search.module';
import {OrderStatusModule} from './order-status/order-status.module';

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

    ],
    providers: [
        {
            provide: MatPaginatorIntl,
            useClass: CustomPaginator
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
