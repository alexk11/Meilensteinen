import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {OrderStatusComponent} from './components/order-status/order-status.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusAdditionalInformationComponent} from './components/order-status-additional-information/order-status-additional-information.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusContactPersonCustomerComponent} from './components/order-status-contact-person-customer/order-status-contact-person-customer.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusContactPersonTelekomComponent} from './components/order-status-contact-person-telekom/order-status-contact-person-telekom.component';
import {OrderStatusCustomerComponent} from './components/order-status-customer/order-status-customer.component';
import {OrderStatusDocumentsComponent} from './components/order-status-documents/order-status-documents.component';
import {OrderStatusMilestonesComponent} from './components/order-status-milestones/order-status-milestones.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TruncatePipe} from '../shared/pipes/truncate.pipe';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    declarations: [
        OrderStatusComponent,
        OrderStatusAdditionalInformationComponent,
        OrderStatusContactPersonCustomerComponent,
        OrderStatusContactPersonTelekomComponent,
        OrderStatusCustomerComponent,
        OrderStatusDocumentsComponent,
        OrderStatusMilestonesComponent,
        TruncatePipe],
    imports: [
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatCardModule
    ],
    exports: [OrderStatusComponent,
        OrderStatusAdditionalInformationComponent,
        OrderStatusContactPersonCustomerComponent,
        OrderStatusContactPersonTelekomComponent,
        OrderStatusCustomerComponent,
        OrderStatusDocumentsComponent,
        OrderStatusMilestonesComponent],
})
export class OrderStatusModule {
}
