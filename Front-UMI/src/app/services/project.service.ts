import { Injectable } from '@angular/core';
import {Project} from "../model/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[];

  constructor() {
    this.projects = new Array(new Project(1, "test"), new Project(2, "test2"));
  }

  getProjects(): Project[] {
    return this.projects;
  }
}
