export class Model {
  id: number;
  texturePath: string;
  modelPath: string;

  constructor(id: number, texturePath: string, modelPath: string) {
    this.id = id;
    this.texturePath = texturePath;
    this.modelPath = modelPath;
  }
}
