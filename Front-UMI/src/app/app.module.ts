import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemsComponent } from './projects/project/items/items.component';
import { BlocksComponent } from './projects/project/blocks/blocks.component';
import {CardModule} from "primeng/card";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { ProjectComponent } from './projects/project/project.component';
import { ConfigComponent } from './projects/project/config/config.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { CreateItemComponent } from './projects/project/items/create-item/create-item.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    UsersComponent,
    NavbarComponent,
    ItemsComponent,
    BlocksComponent,
    ProjectComponent,
    ConfigComponent,
    LoginComponent,
    CreateItemComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        CardModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
