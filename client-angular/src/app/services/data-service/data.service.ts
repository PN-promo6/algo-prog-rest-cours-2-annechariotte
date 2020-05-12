import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../models/user/user';
import { Recipe } from '../../models/recipe/recipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public fetchUsers(): Observable<User[]> {
    let obsUsers: Observable<User[]> = this.httpClient.get<User[]>("http://localhost:3000/users");
    return obsUsers;
  }

  public fetchUserById(id: string): Observable<User[]> {
    let obsUserById: Observable<User[]> = this.httpClient.get<User[]>("http://localhost:3000/users/" + id);
    return obsUserById;
  }

  public fetchRecipes(): Observable<Recipe[]> {
    let obsUsers: Observable<Recipe[]> = this.httpClient.get<Recipe[]>("http://localhost:3000/recipes");
    return obsUsers;
  }

  public fetchRecipeById(id: string): Observable<Recipe[]> {
    let obsUserById: Observable<Recipe[]> = this.httpClient.get<Recipe[]>("http://localhost:3000/recipes/" + id);
    return obsUserById;
  }
}
