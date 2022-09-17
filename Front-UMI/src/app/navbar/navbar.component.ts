import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private projetService: ProjectService,private router: Router) { }

  ngOnInit(): void {
    if(this.projetService.selectedProject == undefined) {
      this.router.navigate(['./projects/'])
    }
  }

}
