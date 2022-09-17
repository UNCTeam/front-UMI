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
import { ModelSelectComponent } from './projects/project/models/model-select/model-select.component';
import {OrderListModule} from "primeng/orderlist";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { CreateModelComponent } from './projects/project/models/create-model/create-model.component';
import {FileUploadModule} from "primeng/fileupload";
import { CreateProjectComponent } from './projects/project/create-project/create-project.component';

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
    CreateItemComponent,
    ModelSelectComponent,
    CreateModelComponent,
    CreateProjectComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    OrderListModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule,
    FileUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
