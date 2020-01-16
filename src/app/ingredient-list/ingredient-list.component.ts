import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../models/ingredient-list.model';

@Component({
  selector: "app-ingredient-list",
  templateUrl: "./ingredient-list.component.html",
  styleUrls: ["./ingredient-list.component.scss"]
})
export class IngredientListComponent {
  @Input() ingredients: Array<Ingredient> = [];
  @Output() select: EventEmitter<Ingredient> = new EventEmitter();

  choseIngredient(ingredient: Ingredient): void {
    this.select.emit(ingredient);
  }
}
