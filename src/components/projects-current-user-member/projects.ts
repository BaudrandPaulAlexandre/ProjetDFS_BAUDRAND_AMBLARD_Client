import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ProjectServices } from "../../services/project";
import { UserServices } from "../../services/user";
import { Project } from "../../models/project";
import { User } from "../../models/user";

@Component({
  selector: 'app-projects-current-user-member',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsCurentUserMemberComponent {
  projects: Project[] = [];
  constructor(private projectServices: ProjectServices, private userServices : UserServices) { }

  ngOnInit(): void {
    this.projectServices.getProjects().subscribe((project) => {
      this.projects = project.filter(project => project.members.includes(this.userServices.getCurrentUser().id) && project.manager != this.userServices.getCurrentUser().id);
    });
  }

  signUpToProject(idProject: number): void {
    this.projectServices.addUser(idProject, this.userServices.getCurrentUser().id).subscribe({
      next: response => {
        console.log(response);
      }
    });
  }

  isUserMember(project: Project): boolean {
    return project.members.includes(this.userServices.getCurrentUser().id);
  }

  isNotFull(project: Project): boolean {
    return project.nbOfMembers >= project.maxNbOfMembers;
  }
}
