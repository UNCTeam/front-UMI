import {Injectable} from '@angular/core';
import {Project} from "../model/project";
import {ActivatedRoute} from "@angular/router";
import {AuthorizedServer} from "../model/authorizedServer";
import {Item} from "../model/item";
import {Model} from "../model/model";
import {ItemType} from "../model/itemType";
import {CustomTag} from "../model/customTag";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: Project;
  private projects: Project[];

  constructor(private route: ActivatedRoute) {
    let fakeproject = new Project(1, "test", new Array<AuthorizedServer>());
     // new Array<Item>(new Item('item1', ItemType.WEAPONS, 1000, new Array<CustomTag>(), null)));
    this.projects = [fakeproject];
    this.selectedProject = fakeproject;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getSelectedProject(): string {
    return <string>this.route.snapshot.paramMap.get('id');
  }
}
