import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DishListComponent } from './dish-list/dish-list.component';
import { DishListItemComponent } from './dish-list-item/dish-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { BasketComponent } from './basket/basket.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminDishListItemComponent } from './admin-dish-list-item/admin-dish-list-item.component';
import { AdminOrderListItemComponent } from './admin-order-list-item/admin-order-list-item.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    DishListItemComponent,
    OrderComponent,
    BasketComponent,
    AdminListComponent,
    AdminDishListItemComponent,
    AdminOrderListItemComponent,
    DishDetailsComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
