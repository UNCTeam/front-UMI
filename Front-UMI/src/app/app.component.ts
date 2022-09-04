import {Component, OnInit} from '@angular/core';
import {ProjectService} from "./services/project.service";
import {ItemService} from "./services/item.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Front-UMI';

  constructor(private projectService: ProjectService, private itemService: ItemService) { }


  ngOnInit(): void {
    this.projectService.initProjects(1);
  }
}
