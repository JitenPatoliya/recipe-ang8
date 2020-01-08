import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient('Sirloing Cut Beef', 200)
    ,new Ingredient('Onion', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(data:Ingredient){
    this.ingredients.push(data);
  }
}
