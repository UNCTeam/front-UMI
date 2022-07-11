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
}
