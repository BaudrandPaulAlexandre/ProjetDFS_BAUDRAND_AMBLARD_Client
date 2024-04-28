import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ProjectServices } from "../../services/project";
import { UserServices } from "../../services/user";
import { Project } from "../../models/project";
import { User } from "../../models/user";

@Component({
  selector: 'app-projects-all',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsAllComponent {
  projects: Project[] = [];
  constructor(private projectServices: ProjectServices) { }

  ngOnInit(): void {
    this.projectServices.getProjects().subscribe((project) => {
      this.projects = project
    });
  }
}
