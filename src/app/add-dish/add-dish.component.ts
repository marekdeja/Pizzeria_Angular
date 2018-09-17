import { Router } from '@angular/router';
import { DishesService } from './../services/dishes.service';
import { Dish } from './../models/dish.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {

  addDishForm = new FormGroup({
    name: new FormControl('', Validators.required),
    isAvailable: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl('', Validators.required),
    price: new FormControl('',  [Validators.required, Validators.pattern("^[0-9.]*$"),])
  });

  constructor(
    readonly service: DishesService,
    readonly router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
      let dish: Dish = this.addDishForm.value;
      if (this.addDishForm.value.isAvailable===""){
        dish.isAvailable=false;
      }
      if (this.addDishForm.status==="VALID"){
    this.service.saveDish(dish).subscribe();
    this.router.navigate(['/admin-list']);
      }
      else{
        alert("Wypenij pola poprawnie!")
      }
    
}

}
