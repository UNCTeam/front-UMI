import {AuthorizedServer} from "./authorizedServer";
import {Item} from "./item";
import {Model} from "./model";

export class Project {
  id: number;
  name: string;
  authorizedServers: Array<AuthorizedServer>;
  items: Array<Item>;
  models: Array<Model>;

  constructor(id: number, name: string, authorizedServers: Array<AuthorizedServer>, items: Array<Item>, models: Array<Model>) {
    this.id = id;
    this.name = name;
    this.authorizedServers = authorizedServers;
    this.items = items;
    this.models = models;
  }
}
