import { Component, OnInit } from '@angular/core';
import {ModelService} from "../../../../services/model.service";

@Component({
  selector: 'app-model-select',
  templateUrl: './model-select.component.html',
  styleUrls: ['./model-select.component.scss']
})
export class ModelSelectComponent implements OnInit {

  constructor(public modelService: ModelService) { }

  ngOnInit(): void {
  }

  select(model: any) {

  }
}
