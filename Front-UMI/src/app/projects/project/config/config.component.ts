import { Component, OnInit } from '@angular/core';
import {AuthorizedServer} from "../../../model/authorizedServer";
import {ProjectService} from "../../../services/project.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  name: string | undefined;
  authorizedServer: Array<AuthorizedServer> | undefined;

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    this.name = this.projectService.selectedProject.name;
    this.authorizedServer = this.projectService.selectedProject.authorizedServers;
  }

  onSave(): void {

  }

}
