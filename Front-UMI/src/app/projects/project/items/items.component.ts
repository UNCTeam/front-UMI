import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {Item} from "../../../model/item";
import {ItemType} from "../../../model/itemType";
import {ItemService} from "../../../services/item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  ItemType = ItemType;
  isCreating = false;

  constructor(public itemService: ItemService, private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item);
  }

  editItem(item: Item) {

  }
}
