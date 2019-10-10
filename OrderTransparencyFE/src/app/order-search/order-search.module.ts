import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderSearchComponent} from './components/order-search/order-search.component';
import {OrderSearchResultsComponent} from './components/order-search-results/order-search-results.component';
import {OrderSearchSearchComponent} from './components/order-search-search/order-search-search.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [OrderSearchComponent,
        OrderSearchResultsComponent,
        OrderSearchSearchComponent],
    imports: [
        CommonModule,
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
    ],
    exports: [OrderSearchComponent,
        OrderSearchResultsComponent,
        OrderSearchSearchComponent],
})
export class OrderSearchModule {
}
