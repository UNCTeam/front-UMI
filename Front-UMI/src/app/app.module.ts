import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsComponent } from './projects/project/items/items.component';
import { ModelsComponent } from './projects/project/models/models.component';
import {CardModule} from "primeng/card";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { ProjectComponent } from './projects/project/project.component';
import { ConfigComponent } from './projects/project/config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    UsersComponent,
    NavbarComponent,
    ItemsComponent,
    ModelsComponent,
    ProjectComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
