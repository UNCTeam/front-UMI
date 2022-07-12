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
  itemField = new Item(0, "", ItemType.HELMET, 0, new Array<CustomTag>(), null);

  // Edition ou création ?
  isEditing = false;

  // @ts-ignore
  ref: DynamicDialogRef;

  constructor(private activatedroute: ActivatedRoute, public itemService: ItemService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.itemField = new Item(0, "", ItemType.HELMET, 0, new Array<CustomTag>(), null);
    this.activatedroute.paramMap.subscribe(params => {
      if(params.keys.length != 0) {
        // @ts-ignore
        let id:number = +params.get('id');
        this.itemField = this.itemService.itemList[id];
        // TODO : relocale l'user à la racine si l'id en param est incorrect ou introuvable
      }
    });
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
        console.log(model);
        // TODO : faire la lisaison
      }
    });
  }
}
