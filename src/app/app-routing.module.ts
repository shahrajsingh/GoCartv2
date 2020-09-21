import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContentComponent } from './content/content.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'viewCart', component: CartComponent },
  { path: 'viewOrders', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
