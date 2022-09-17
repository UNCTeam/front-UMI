import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectComponent} from "./projects/project/project.component";
import {ItemsComponent} from "./projects/project/items/items.component";
import {BlocksComponent} from "./projects/project/blocks/blocks.component";
import {ConfigComponent} from "./projects/project/config/config.component";
import {LoginComponent} from "./login/login.component";
import {CreateItemComponent} from "./projects/project/items/create-item/create-item.component";
import {ModelSelectComponent} from "./projects/project/models/model-select/model-select.component";

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'app/items', component: ItemsComponent},
  { path: 'app/items/new', component: CreateItemComponent },
  { path: 'app/items/edit/:id', component: CreateItemComponent },
  { path: 'app/blocks', component: BlocksComponent},
  { path: 'app/models', component: ModelSelectComponent},
  { path: 'app/config', component: ConfigComponent},
  { path: 'app/dashboard', component: ProjectComponent},
  { path: '', component: LoginComponent},
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
