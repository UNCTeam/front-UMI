import { Component, OnInit } from '@angular/core';
import {ModelService} from "../../../../services/model.service";
import {PrimeNGConfig, SelectItem} from "primeng/api";
import {Model} from "../../../../model/model";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-model-select',
  templateUrl: './model-select.component.html',
  styleUrls: ['./model-select.component.scss']
})
export class ModelSelectComponent implements OnInit {

  constructor(public modelService: ModelService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {

  }

  selectModel(model: Model) {
    this.ref.close(model);
  }
}
