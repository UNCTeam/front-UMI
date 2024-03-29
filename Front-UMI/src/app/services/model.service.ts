import { Injectable } from '@angular/core';
import {Model} from "../model/model";
import {ApiHttpService} from "./api-http.service";
import {HttpHeaders} from "@angular/common/http";
import {ProjectService} from "./project.service";

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  models: Model[] = [];

  constructor(private apiHttpService: ApiHttpService, private projectService: ProjectService) { }


  async addModel(model: ModelTemplate): Promise<Boolean> {
    let res: boolean;

    let headers = new HttpHeaders()
    headers.set('content-type', 'multipart/form-data');
    headers.set('Access-Control-Allow-Origin', '*');

    let data = new FormData();
    data.append('texture', model.textureFile, model.textureFile.name);
    data.append('model', model.modelFile, model.modelFile.name);
    data.append('name', 'test');
    console.log(this.projectService.selectedProject);
    let endpoint = 'models' + this.projectService.selectedProject.id;
    await this.apiHttpService.post(endpoint, data, { headers: headers }).subscribe(
      (value) => {
        this.models.push(value);
        res = true;
      },
      (error) => {
        console.log(error);
        res = false;
      });

    // @ts-ignore
    return res;
  }
}


export interface ModelTemplate {
  name: string | undefined;
  modelFile: any | undefined;
  textureFile: any | undefined;
  project_id: number | undefined;
}
