import { Injectable } from '@angular/core';
import {Project} from "../model/project";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: Project;
  private projects: Project[];

  constructor(private route: ActivatedRoute) {
    this.projects = new Array(new Project(1, "test"), new Project(2, "test2"));
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getSelectedProject(): string {
    return <string>this.route.snapshot.paramMap.get('id');
  }
}
