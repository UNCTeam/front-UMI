import { Injectable } from '@angular/core';
import {Item} from "../model/item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemList = new Array<Item>();

  constructor() { }

  initItems() {

  }

  newItem(item: Item): boolean {
    this.itemList.push(item);
    return true;
  }

  deleteItem(item: Item) {
    this.itemList = this.itemList.filter(i => i != item);
  }
}
