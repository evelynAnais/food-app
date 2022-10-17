import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test', 'https://www.feastingathome.com/wp-content/uploads/2021/01/How-to-grow-sprouts-2-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
