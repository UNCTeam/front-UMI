import {Injectable} from '@angular/core';
import {Project} from "../model/project";
import {ActivatedRoute} from "@angular/router";
import {AuthorizedServer} from "../model/authorizedServer";
import {Item} from "../model/item";
import {Model} from "../model/model";
import {ItemType} from "../model/itemType";
import {CustomTag} from "../model/customTag";
import {HttpClient, HttpEvent} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiHttpService} from "./api-http.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: Project | undefined;
  private projects: Project[];

  constructor(private route: ActivatedRoute, private apiHttpService: ApiHttpService) {
    this.projects = [];
  }

  initProjects(userId: number) {
    return this.apiHttpService.get(environment.apiUrl + 'accounts/projects/' + userId).subscribe(value => {
      console.log(value);
      //this.projects = value;
    },
    error => {
    console.log(error);
    });
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getSelectedProject(): string {
    return <string>this.route.snapshot.paramMap.get('id');
  }

}
