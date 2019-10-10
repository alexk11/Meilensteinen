import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {OrderStatusComponent} from '../../components/orderStatus/order-status/order-status.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusAdditionalInformationComponent} from '../../components/orderStatus/order-status-additional-information/order-status-additional-information.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusContactPersonCustomerComponent} from '../../components/orderStatus/order-status-contact-person-customer/order-status-contact-person-customer.component';
// tslint:disable-next-line:max-line-length
import {OrderStatusContactPersonTelekomComponent} from '../../components/orderStatus/order-status-contact-person-telekom/order-status-contact-person-telekom.component';
import {OrderStatusCustomerComponent} from '../../components/orderStatus/order-status-customer/order-status-customer.component';
import {OrderStatusDocumentsComponent} from '../../components/orderStatus/order-status-documents/order-status-documents.component';
import {OrderStatusMilestonesComponent} from '../../components/orderStatus/order-status-milestones/order-status-milestones.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TruncatePipe} from '../../pipes/truncate.pipe';
import {MatIconModule} from '@angular/material';


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
    MatIconModule
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
