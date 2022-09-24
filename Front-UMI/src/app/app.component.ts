import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./services/project.service";
import {ItemService} from "./services/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front-UMI';

  constructor(private projectService: ProjectService, public router: Router) { }


  ngOnInit(): void {
    this.projectService.initProjects(1);
  }
}
