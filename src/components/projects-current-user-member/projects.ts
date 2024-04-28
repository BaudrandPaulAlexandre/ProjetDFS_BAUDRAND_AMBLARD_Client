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
  users: User[] = [];
  constructor(private projectServices: ProjectServices, private userServices : UserServices) { }

  ngOnInit(): void {
    this.projectServices.getProjects().subscribe((project) => {
      this.projects = project.filter(project => project.members.includes(this.userServices.getCurrentUser().id));
    });
    this.userServices.getUsers().subscribe((user) => {
      this.users = user;
    });
  }
  getUserName(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Utilisateur inconnu';
  }
}
