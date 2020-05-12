import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data-service/data.service';
import { Recipe } from '../models/recipe/recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  public recipes: Recipe[];
  id = "2";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchRecipes()
      .subscribe(
        (res) => {
          // console.log(res);
          this.recipes = res;
        },
        (error) => {
          console.log(error);

        }
      );

    this.dataService.fetchRecipeById(this.id)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);

        }
      );
  }

}
