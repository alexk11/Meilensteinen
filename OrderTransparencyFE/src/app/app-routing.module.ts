import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderSearchComponent} from './order-search/components/order-search/order-search.component';
import {OrderStatusComponent} from './order-status/components/order-status/order-status.component';


const routes: Routes = [
  {path: '', component: OrderSearchComponent},
  {path: 'orderstatus', component: OrderStatusComponent},
  {path: 'orderstatus/:orderItemId/:searchType/:searchTerm', component: OrderStatusComponent},
  {path: 'ordersearch', component: OrderSearchComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, /*{enableTracing: true}*/)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
