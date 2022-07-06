import { Component, OnInit } from '@angular/core';
import {AuthorizedServer} from "../../../model/authorizedServer";
import {ProjectService} from "../../../services/project.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  ipInputField = "";
  name = "";
  authorizedServer: Array<AuthorizedServer> = new Array<AuthorizedServer>();

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    this.name = this.projectService.selectedProject.name;
    this.authorizedServer = this.projectService.selectedProject.authorizedServers;
  }

  onSave(): void {

  }

  removeServer(server: AuthorizedServer): void {
    this.authorizedServer = this.authorizedServer.filter(serv => serv != server);
  }

  addIp(): void {
    if(this.ipInputField !== "") {
      this.authorizedServer.push(new AuthorizedServer(this.ipInputField));
      this.ipInputField = "";
    }
  }

}
