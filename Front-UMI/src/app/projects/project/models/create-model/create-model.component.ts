import { Component, OnInit } from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ModelService, ModelTemplate} from "../../../../services/model.service";
import {ProjectService} from "../../../../services/project.service";

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.scss'],
  providers: [DialogService]
})
export class CreateModelComponent implements OnInit {

  model: ModelTemplate = {
    name: undefined,
    modelFile: undefined,
    textureFile: undefined,
    project_id: this.projectService.selectedProject?.id
  }

  constructor(public ref: DynamicDialogRef, private modelService: ModelService, private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  async addModel() {
    if(this.validate()) {
      let result = await this.modelService.addModel(this.model);
      if(result) {
        this.ref.close(result);
      }
    }
  }

  validate() : boolean{
    let res: boolean = true;

    if (this.model.name == "") {
      console.log("Model name is empty");
      res = false;
    }

    if (this.model.modelFile == null) {
      console.log("Model file is empty");
      res = false;
    }

    if (this.model.textureFile == null) {
      console.log("Texture file is empty");
      res = false;
    }

    return res;
  }

  onSelectModel($event: any) {
    // TODO : vérifier l'extension du fichier
    this.model.modelFile = $event.currentFiles[0];
  }

  onSelectTexture($event: any) {
    console.log($event);
    this.model.textureFile = $event.currentFiles[0];
  }
}
