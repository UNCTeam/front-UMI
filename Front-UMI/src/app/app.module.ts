import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { NavbarComponent } from './projects/navbar/navbar.component';
import { ItemsComponent } from './projects/items/items.component';
import { ModelsComponent } from './projects/models/models.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    UsersComponent,
    NavbarComponent,
    ItemsComponent,
    ModelsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
