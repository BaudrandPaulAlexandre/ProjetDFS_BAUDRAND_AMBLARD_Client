import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { UserServices } from "../../services/user";
import { Project } from "../../models/project";
import { ProjectServices } from "../../services/project";
import { User } from "../../models/user";

@Component({
  selector: 'app-projects-current-user-manager',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsCurentUserManagerComponent {
  projects: Project[] = [];
  users: User[] = [];
  constructor(private projectServices: ProjectServices, private userServices : UserServices) { }

  ngOnInit(): void {

  }
  
}
