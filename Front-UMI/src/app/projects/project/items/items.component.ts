import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../services/project.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
