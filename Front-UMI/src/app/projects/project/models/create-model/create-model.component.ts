import { Component, OnInit } from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ModelService} from "../../../../services/model.service";

@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.scss'],
  providers: [DialogService]
})
export class CreateModelComponent implements OnInit {

  uploadedTextureFile: any;
  uploadedModelFile: any;

  constructor(public ref: DynamicDialogRef, private modelService: ModelService) { }

  ngOnInit(): void {
  }

  addModel() {
    if(this.uploadedTextureFile != null && this.uploadedModelFile != null) {
      let result = this.modelService.addModel(this.uploadedTextureFile, this.uploadedModelFile);
      if(result) {
        this.ref.close(result);
      }
    }
  }

  myUploader($event: any) {

  }

  onSelectModel($event: any) {
    // TODO : vérifier l'extension du fichier
    this.uploadedModelFile = $event.currentFiles[0];
  }

  onSelectTexture($event: any) {
    console.log($event);
    this.uploadedTextureFile = $event.currentFiles[0];
  }
}
