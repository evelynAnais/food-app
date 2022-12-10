import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Carrots', 9)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
