import {CustomTagProperty} from "./customTagProperty";

export class CustomTag {
  customTagProperty: CustomTagProperty;
  value: number;

  constructor(customTagProperty: CustomTagProperty, value: number) {
    this.customTagProperty = customTagProperty;
    this.value = value;
  }
}
