import { LoginService } from './../services/login.service';
import { BasketService } from './../services/basket.service';
import { BasketComponent } from './../basket/basket.component';
import { getTestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { OrderService} from '../services/order.service';
import { Order } from '../models/order.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  personalData = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern("^[0-9]*$"),]),
    address: new FormControl('',  Validators.required),
  });

  order: Order;

  constructor(
    readonly service: OrderService,
    readonly basketService: BasketService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.personalData.status==="VALID" && this.basketService.dishes.length>0){
    let newOrder: Order = this.personalData.value;
    this.service.sendOrder(newOrder);
    let el = document.getElementById("orderInfo");
    let elForm = document.getElementById("myForm");
    el.setAttribute('class','visible');
    elForm.setAttribute('class','nonVisible');
    }
    else if(this.basketService.dishes.length===0){
      alert("Koszyk pusty!");
    }
    else{
      alert("Niepoprawne dane, uzupelnij wszystkie. Nazwa i adres nie moga byc puste. Telefon musi miec min. 6 cyfr");
    }

  
    this.basketService.dishes= [];
     this.basketService.dishesToDisplay = [];
     
     
  }

 
  


}

