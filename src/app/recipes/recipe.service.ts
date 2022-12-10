import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test', 'Description', 'https://www.feastingathome.com/wp-content/uploads/2021/01/How-to-grow-sprouts-2-1.jpg'),
    new Recipe('Test 2', 'Description 2', 'https://www.feastingathome.com/wp-content/uploads/2021/01/How-to-grow-sprouts-2-1.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
