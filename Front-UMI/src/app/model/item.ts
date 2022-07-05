import {CustomTag} from "./customTag";
import {ItemType} from "./itemType";

export class Item {
  name: String;
  type: ItemType;
  durability: number;
  customTags: Array<CustomTag>

  constructor(name: String, type: ItemType, durability: number, customTags: Array<CustomTag>) {
    this.name = name;
    this.type = type;
    this.durability = durability;
    this.customTags = customTags;
  }
}
