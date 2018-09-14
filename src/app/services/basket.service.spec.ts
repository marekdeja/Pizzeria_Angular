import { Dish } from './../models/dish.model';
import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { BasketService } from './basket.service';

describe('BasketService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasketService]
    });
  });

  it('should be created', inject([BasketService], (service: BasketService) => {
    expect(service).toBeTruthy();
  }));

  it('should getOrderList', inject([BasketService], (service: BasketService) => {
    //given
    let o = [ <Dish>{ id: 2 }];
    
   service.dishes = o;

    //when
     let result = service.getOrderList();
    //then
    
     expect(service.dishes).toBe(result);

  }));

  
  it('should getOrderListToDisplay', inject([BasketService], (service: BasketService) => {
    //given
    let o = [ <Dish>{ id: 2 }];
    
   service.dishesToDisplay = o;

    //when
     let result = service.getOrderListToDisplay();
    //then
    
     expect(service.dishesToDisplay).toBe(result);

  }));

  it('should addDish', inject([BasketService], (service: BasketService) => {
    //given
    let dishList = [ <Dish>{ id: 2 }];
    let dish1 = [ <Dish>{ id: 4 }];
    
   service.dishes = dishList;

    //when
     let result = service.addDish(dish1);
    //then
    
     expect(service.dishes.length).toBe(2);
  }));

  it('should countDish and return 2', inject([BasketService], (service: BasketService) => {
    //given
    let dish2 = <Dish>{ id: 4 };
    let dishList = [ <Dish>{ id: 2 }, dish2, dish2];
    let dish1 = dish2; 
    // <Dish>{ id: 4 };
    
   service.dishes = dishList;

    //when
  
     let result = service.countDish(dish1);
    //then
    
     expect(result).toBe(2);
  }));

  it('should coutTotalPrice and return 40.00', inject([BasketService], (service: BasketService) => {
    //given
    let dish2 = <Dish>{ id: 4, price: 10 };
    let dishList = [ <Dish>{ id: 2, price: 20 }, dish2, dish2];
    
    // <Dish>{ id: 4 };
    
   service.dishes = dishList;

    //when
  
     let result = service.countTotal();
    //then
    let expectedNuber: number = 40;
     expect(result).toBe(expectedNuber.toFixed(2));
  }));

   

});