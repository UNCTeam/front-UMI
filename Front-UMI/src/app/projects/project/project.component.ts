import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../services/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: number;

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    this.id = this.projectService.selectedProject.id;
  }

}
