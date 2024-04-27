import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { SingInService } from "../../services/signin";
import { Project } from "../../models/project";
import { ProjectService } from "../../services/projects";

@Component({
  selector: 'app-projects-all',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects: Project[] = [];
  project : Project | undefined;
  displayProject: Project[] = [];
  constructor(private projectService: ProjectService, private connexion : SingInService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((project) => {
      this.projects = project
      for (let i = 0; i < this.projects.length; i++) {
          this.project = this.projects[i];
          this.displayProject.push(this.project);
      }
    });
  }
}
