import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectComponent} from "./projects/project/project.component";
import {ItemsComponent} from "./projects/project/items/items.component";
import {ModelsComponent} from "./projects/project/models/models.component";
import {ConfigComponent} from "./projects/project/config/config.component";

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'project', component: ProjectComponent},
  { path: 'project/items', component: ItemsComponent},
  { path: 'project/models', component: ModelsComponent},
  { path: 'project/config', component: ConfigComponent},
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
