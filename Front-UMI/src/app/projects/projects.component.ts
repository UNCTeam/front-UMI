import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Project} from "../model/project";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  hoveringProject: boolean[] = [];
  projects: Project[] | undefined;

  constructor(public projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    for(let i = 0; i < this.projects.length;i++) {
      this.hoveringProject.push(false);
    }
  }

  goToProject(project: Project) {
    this.projectService.selectedProject = project;
    this.router.navigate(['./app/dashboard/'])
  }
}
