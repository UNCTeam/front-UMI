import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectComponent} from "./projects/project/project.component";
import {ItemsComponent} from "./projects/project/items/items.component";
import {ModelsComponent} from "./projects/project/models/models.component";
import {ConfigComponent} from "./projects/project/config/config.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'items', component: ItemsComponent},
  { path: 'models', component: ModelsComponent},
  { path: 'config', component: ConfigComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
