import { Injectable } from '@angular/core';
import {Item} from "../model/item";
import {ApiHttpService} from "./api-http.service";
import {ProjectService} from "./project.service";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemList = new Array<Item>();

  constructor(private apiHttpService: ApiHttpService, private projectService: ProjectService) { }

  initItems() {
    this.apiHttpService.get('projects/' + this.projectService.selectedProject.id).subscribe(
      (value: Item[]) => {
        this.itemList = value;
        console.log(this.itemList);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newItem(item: Item) {
    this.apiHttpService.post('items', item).subscribe(
      (value) => {
        this.itemList.push(item);
      },
      (error) => {
        console.log(error);
      });
  }

  deleteItem(item: Item) {
    this.apiHttpService.delete('items/' + item.id).subscribe(
      (value) => {
        console.log(value);
        this.itemList.splice(this.itemList.indexOf(item), 1);
      },
      (error) => {
        console.log(error);
      });
  }
}
