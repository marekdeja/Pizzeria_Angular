import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishListComponent } from './dish-list/dish-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'dish-list', pathMatch: 'full' },
  { path: 'dish-list', component: DishListComponent },
  { path: 'admin-list', component: AdminListComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: 'dish-list' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
