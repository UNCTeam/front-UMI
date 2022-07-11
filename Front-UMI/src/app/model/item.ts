import {CustomTag} from "./customTag";
import {ItemType} from "./itemType";
import {Model} from "./model";

export class Item {
  id: number;
  name: String;
  type: ItemType;
  durability: number;
  customTags: Array<CustomTag>;
  model: Model;

  constructor(id: number, name: String, type: ItemType, durability: number, customTags: Array<CustomTag>, model: any) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.durability = durability;
    this.customTags = customTags;
    this.model = model;
  }

  copy(): Item {
    return new Item(this.id, this.name, this.type, this.durability, this.customTags, this.model);
  }
}
