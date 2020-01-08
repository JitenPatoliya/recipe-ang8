import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[] = [
    new Recipe("Steak", "Using this recipe you can prepare a delicious steak"
            , "https://source.unsplash.com/100x100/?dinner")
    , new Recipe("Rib Eye", "Using this recipe you can prepare a delicious Rib eye"
            , "https://source.unsplash.com/100x100/?dinner")
  ];

  @Output() theRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe:Recipe){
    this.theRecipe.emit(recipe);
  }
}
