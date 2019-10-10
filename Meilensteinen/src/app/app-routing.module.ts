import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrderSearchComponent} from './components/orderSearch/order-search/order-search.component';
import {OrderStatusComponent} from './components/orderStatus/order-status/order-status.component';


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
