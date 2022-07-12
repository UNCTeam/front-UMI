import { Injectable } from '@angular/core';
import {Model} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  models: Model[];

  constructor() {
    this.models = new Array(new Model('url/ici/test.png', 'test'), new Model('azdazd/zad/test2.jpg', 'test2'));
  }

  addModel(textureFile: File, modelFile: File): boolean {
    // TODO : Call API -> return un boolean ou la value
    this.models.push(new Model(textureFile.name, modelFile.name));
    return true;
  }
}
