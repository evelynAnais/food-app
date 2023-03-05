import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Enchiladas',
      'Traditional Mexican dish',
      'https://thedirtygyro.com/wp-content/uploads/2022/02/Beef-Enchilladas1055023.jpg',
      [
        new Ingredient('Tortillas', 10),
        new Ingredient('Cheese Bag', 1),
      ]),
    new Recipe(
      'Tacos',
      'Traditional Mexican dish',
      'https://i2.wp.com/pressurecookingtoday.com/wp-content/uploads/2022/01/Pork_and_Hominy_Stew_Posole_Instant_Pot_Recipe_Pressure_Cooking_Today_PCT-2309.jpg',
      [
        new Ingredient('Hominy', 1),
        new Ingredient('Corn', 1),
        new Ingredient('Onion', 1),
      ])
  ];

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
