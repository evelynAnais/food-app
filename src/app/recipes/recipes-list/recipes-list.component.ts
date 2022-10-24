import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'Description', 'https://www.feastingathome.com/wp-content/uploads/2021/01/How-to-grow-sprouts-2-1.jpg'),
    new Recipe('Test 2', 'Description 2', 'https://www.feastingathome.com/wp-content/uploads/2021/01/How-to-grow-sprouts-2-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
