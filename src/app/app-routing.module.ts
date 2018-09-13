import { AuthGuard } from './guards/auth.guard';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DishListComponent } from './dish-list/dish-list.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { OrderComponent } from './order/order.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'dish-list', pathMatch: 'full' },
  { path: 'dish-list', component: DishListComponent },
  { path: 'admin-list', component: AdminListComponent,  canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'dish-details/:id', component: DishDetailsComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: 'dish-list' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
