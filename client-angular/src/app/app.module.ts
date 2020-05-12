import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserPreviewComponent,
    RecipesListComponent,
    RecipePreviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
