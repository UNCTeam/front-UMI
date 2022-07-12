import { Component, OnInit } from '@angular/core';
import {ModelService} from "../../../../services/model.service";
import {PrimeNGConfig, SelectItem} from "primeng/api";
import {Model} from "../../../../model/model";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {CreateModelComponent} from "../create-model/create-model.component";

@Component({
  selector: 'app-model-select',
  templateUrl: './model-select.component.html',
  styleUrls: ['./model-select.component.scss'],
  providers: [DialogService]
})
export class ModelSelectComponent implements OnInit {

  constructor(public modelService: ModelService, public ref: DynamicDialogRef, public config: DynamicDialogConfig,
              private dialogService: DialogService) { }

  ngOnInit(): void {

  }

  selectModel(model: Model) {
    this.ref.close(model);
  }

  addModel() {
    this.ref = this.dialogService.open(CreateModelComponent, {
      header: 'Create a model',
      width: '60%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((model: Model) =>{
      if (model) {
        this.ref.close(model);
      }
    });
  }
}
