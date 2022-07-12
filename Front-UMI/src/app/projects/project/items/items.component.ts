import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {Item} from "../../../model/item";
import {ItemType} from "../../../model/itemType";
import {ItemService} from "../../../services/item.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ConfirmationService]
})
export class ItemsComponent implements OnInit {

  ItemType = ItemType;
  isNoItems = false;

  constructor(public itemService: ItemService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.checkEmptyItems();
  }

  deleteItem(item: Item) {
    console.log('test');
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete ' + item.name + '?',
      accept: () => {
        this.itemService.deleteItem(item);
        this.checkEmptyItems();
      }
    });

  }

  checkEmptyItems() {
    if (this.itemService.itemList.length === 0) {
      this.isNoItems = true;
    }
  }
}
