import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../services/project.service";
import {Item} from "../../../model/item";
import {ItemType} from "../../../model/itemType";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemList = new Array<Item>();
  ItemType = ItemType;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.itemList = this.projectService.selectedProject.items;
  }

}
