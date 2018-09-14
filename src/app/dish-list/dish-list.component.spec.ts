import { DishesService } from './../services/dishes.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DishListItemComponent } from './../dish-list-item/dish-list-item.component';
import { BasketComponent } from './../basket/basket.component';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { DishListComponent } from './dish-list.component';
import { of } from 'rxjs';
import { Dish } from '../models/dish.model';
import { doesNotThrow } from 'assert';

describe('DishListComponent', () => {
  let component: DishListComponent;
  let fixture: ComponentFixture<DishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DishListComponent,
        BasketComponent,
        DishListComponent,
        DishListItemComponent
      ],
      imports: [RouterTestingModule],

      providers: [
        HttpClient,
        HttpHandler
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run ngOnInit', fakeAsync(() => {
    //given
    const dishService = TestBed.get(DishesService);
    const data = [ <Dish>{ id: 2 } ];
    const dishServiceSpy = spyOn(dishService, 'getPizzas').and.returnValue(of(data));

    //when
    component.ngOnInit();

    //then
    expect(dishServiceSpy).toHaveBeenCalled();
    expect(component.dishes).toBe(data);


  }));

  it('should showPastas', fakeAsync(() => {
    //given
    const dishService1 = TestBed.get(DishesService);
    const data1 = [ <Dish>{ id: 3 } ];
    const dishServiceSpy1 = spyOn(dishService1, 'getPastas').and.returnValue(of(data1));

    //when

    component.showPastas();

    //then
    expect(dishServiceSpy1).toHaveBeenCalled();
    expect(component.dishes).toBe(data1);
  }));

  it('should showBeverages', fakeAsync(() => {
    //given
    // component.dishes = [];
    const dishService2 = TestBed.get(DishesService);
    const data2 = [ <Dish>{ id: 2 } ];
    const dishServiceSpy2 = spyOn(dishService2, 'getBeverages').and.returnValue(of(data2));

    //when

    component.showBeverages();

 
    //then
    expect(dishServiceSpy2).toHaveBeenCalled();
    expect(component.dishes).toBe(data2);
  }));



});
