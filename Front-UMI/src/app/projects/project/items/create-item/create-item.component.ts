import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemType} from "../../../../model/itemType";
import {CustomTag} from "../../../../model/customTag";
import {CustomTagProperty} from "../../../../model/customTagProperty";
import {Item} from "../../../../model/item";
import {ItemService} from "../../../../services/item.service";
import {ActivatedRoute} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ModelSelectComponent} from "../../models/model-select/model-select.component";
import {Model} from "../../../../model/model";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
  providers: [DialogService]
})
export class CreateItemComponent implements OnInit {
  // Récupère sous forme de string la liste des types
  itemTypes = Object.keys(ItemType).slice(Object.keys(ItemType).length / 2);

  // Champs de l'item
  customTagsPropertys = new Array<CustomTagProperty>(new CustomTagProperty('ATTACK', '12'));
  customValueField = 0;
  customTagField: CustomTagProperty = new CustomTagProperty('ATTACK', '12');
  itemField = {
    name: '',
    type: ItemType.OTHER,
    durability: 0,
    customTags: new Array<CustomTag>(),
    model: null
  }

  // Edition ou création ?
  isEditing = false;

  ref: DynamicDialogRef;

  constructor(private activatedroute: ActivatedRoute, public itemService: ItemService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      if(params.keys.length != 0) {
        this.isEditing = true;
        let id = params.get('id');

        // TODO : relocale l'user à la racine si l'id en param est incorrect ou introuvable
      }
    });
  }

  removeCustomTag(customTag: CustomTag) {
    if (this.itemField.customTags) this.itemField.customTags = this.itemField.customTags.filter((cu: CustomTag) => cu != customTag);
  }

  addCustomTag() {
    if (this.itemField.customTags) {
      this.itemField.customTags.push(new CustomTag(this.customTagField, this.customValueField));
      this.customValueField = 0;
    }
  }

  save() {
    if (this.validate()) {
      const item = new Item(1, this.itemField.name, this.itemField.type, this.itemField.durability, this.itemField.customTags, null);
      // TODO: Faire un susbcribe sur l'appel API -> Si value => redirect + message success Si error => afficher error
      this.itemService.newItem(item);
    }
  }

  validate(): boolean {
    let res: boolean = true;

    if (!this.itemField.name) {
      console.log('Name is required');
      res = false;
    }
    if (!this.itemField.type) {
      console.log('Type is required');
      res = false;
    }
    if (!this.itemField.durability) {
      console.log('Durability is required');
      res = false;
    }

    return res;
  }

  selectModel() {
    this.ref = this.dialogService.open(ModelSelectComponent, {
      header: 'Choose a model',
      width: '70%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((model: Model) =>{
      if (model) {
        this.itemField.model = model;
      }
    });
  }
}
