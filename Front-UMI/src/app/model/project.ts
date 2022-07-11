import {AuthorizedServer} from "./authorizedServer";
import {Item} from "./item";
import {Model} from "./model";

export class Project {
  id: number;
  name: string;
  authorizedServers: Array<AuthorizedServer>;

  constructor(id: number, name: string, authorizedServers: Array<AuthorizedServer>) {
    this.id = id;
    this.name = name;
    this.authorizedServers = authorizedServers;
  }
}
