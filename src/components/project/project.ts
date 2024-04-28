import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import { ProjectServices } from "../../services/project";
import { UserServices } from "../../services/user";
import { Project } from "../../models/project";
import { User } from "../../models/user";

@Component({
  selector: 'app-project-show',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class ProjectComponent {
  project: Project | undefined;
  users: User[] = [];
  idProject : number | undefined;
  constructor(private projectServices: ProjectServices, private userServices : UserServices, private idUrl: ActivatedRoute) { }

  ngOnInit(): void {
    this.idProject = Number(this.idUrl.snapshot.paramMap.get('id'))
    this.projectServices.getProjectById(this.idProject).subscribe((project) => {
        this.project = project;
    })
    this.userServices.getUsers().subscribe((user) => {
      this.users = user;
    });
  }
  getUserName(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Utilisateur inconnu';
  }

  signUpToProject(idProject: number): void {
    this.projectServices.addUser(idProject, this.userServices.getCurrentUser().id);
  }

  isUserMember(project: Project): boolean {
    return project.members.includes(this.userServices.getCurrentUser().id);
  }

  isNotFull(project: Project): boolean {
    return project.nbOfMembers >= project.maxNbOfMembers;
  }

}
