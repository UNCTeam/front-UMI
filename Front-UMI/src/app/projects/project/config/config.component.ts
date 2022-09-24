import {Component, OnInit} from '@angular/core';
import {AuthorizedServer} from "../../../model/authorizedServer";
import {ProjectService} from "../../../services/project.service";
import {Project} from "../../../model/project";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  isEditing = false;
  ipInputField = "";
  name = "";
  showConfirmDelete = false;
  authorizedServer: Array<AuthorizedServer> = new Array<AuthorizedServer>();

  constructor(public projectService: ProjectService, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.isEditing = this.router.url.includes('config');
    if (this.projectService.selectedProject && this.isEditing) {
      this.name = this.projectService.selectedProject.name;
      this.authorizedServer = this.projectService.selectedProject.authorizedServers;
    }
  }

  removeServer(server: AuthorizedServer): void {
    this.projectService.removeAuthorizedServer(server.id).subscribe(value => {
      this.projectService.selectedProject.authorizedServers.filter(value1 => value1.id !== server.id);
      this.authorizedServer.filter(value1 => value1.id !== server.id);
    });
  }

  addIp(): void {
    if (this.ipInputField !== "" && this.isEditing) {
      this.projectService.addAuthorizedServer(this.ipInputField).subscribe(value => {
        this.authorizedServer.push(new AuthorizedServer(1, this.ipInputField));
        this.ipInputField = "";
      })
    }
  }

  save() {
    if (this.isEditing) {
      let projet = {
        id: this.projectService.selectedProject?.id,
        name: this.name,
        authorizedServers: this.authorizedServer,
        account_id: this.userService.getUserId()
      }
      this.projectService.updateProject(projet).subscribe(value => {
        this.updateSaveProject(value);
      })
    } else {
      let projet = {
        name: this.name,
        account_id: this.userService.getUserId()
      }
      // Appel API pour créer le projet
      this.projectService.saveProject(projet).subscribe(value => {
        // On actualise les projets pour mettre à jour les changement
        this.updateSaveProject(value);

        // Pour chaque adresse ip autorisée, on l'ajoute au projet en appelant l'API
        for (const address of this.authorizedServer) {
          this.projectService.addAuthorizedServer(address.serverAddress).subscribe();
        }
      })
    }
  }

  updateSaveProject(value: Project) {
    this.projectService.selectedProject = value;
    this.router.navigate(['./app/dashboard'])
    this.projectService.initProjects(this.userService.getUserId());
  }

  cancel() {
    this.router.navigate(['./projects/'])
  }

  deleteProject(result: string) {
    this.showConfirmDelete = false;
    if (result === 'yes') {
      /*this.projectService.deleteProject(this.projectService.selectedProject?.id).subscribe(value => {
        this.projectService.initProjects(this.userService.getUserId());
        this.router.navigate(['./projects/'])
      })*/
      console.log("delete project");
    }
  }

  toggleModal() {
    this.showConfirmDelete = true;
  }
}
