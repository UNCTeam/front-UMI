import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemType} from "../../../../model/itemType";
import {CustomTag} from "../../../../model/customTag";
import {CustomTagProperty} from "../../../../model/customTagProperty";
import {Item} from "../../../../model/item";
import {ItemService} from "../../../../services/item.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  // Récupère sous forme de string la liste des types
  itemTypes = Object.keys(ItemType).slice(Object.keys(ItemType).length / 2);
  customTagsPropertys = new Array<CustomTagProperty>(new CustomTagProperty('ATTACK', '12'));
  customValueField = 0;
  customTagField: CustomTagProperty = new CustomTagProperty('ATTACK', '12');
  itemField = new Item(0, "", ItemType.HELMET, 0, new Array<CustomTag>(), null);

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.itemField = new Item(0, "", ItemType.HELMET, 0, new Array<CustomTag>(), null);
  }

  removeCustomTag(customTag: CustomTag) {
    this.itemField.customTags = this.itemField.customTags.filter(cu => cu != customTag);
  }

  addCustomTag() {
    this.itemField.customTags.push(new CustomTag(this.customTagField, this.customValueField));
    this.customValueField = 0;
  }

  save() {
    const item = new Item(1, this.itemField.name, this.itemField.type, this.itemField.durability, this.itemField.customTags, null);
    // TODO: Faire un susbcribe sur l'appel API -> Si value => redirect + message success Si error => afficher error
    this.itemService.newItem(item);
    console.log(item);
    console.log(this.itemService.itemList);
  }
}
