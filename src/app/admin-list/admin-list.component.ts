import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dish } from '../models/dish.model';
import { DishesService} from '../services/dishes.service';
import { Subscription } from 'rxjs';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})

export class AdminListComponent implements OnInit {
  dishes: Dish[];
  orders: Order[];

  sub: Subscription;
  sub2: Subscription;

 
   constructor(
     readonly service: DishesService,
     readonly oderService: OrderService
   ) { }
 
   ngOnInit(): void {
     this.sub = this.service.getDishes()
     .subscribe(res=>this.dishes = res);

     this.sub2 = this.oderService.getOrders()
     .subscribe(res=>this.orders = res);
   }
 
   ngOnDestroy(): void {
     this.sub.unsubscribe();
     this.sub2.unsubscribe();
   }


}
