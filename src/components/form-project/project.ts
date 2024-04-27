import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { UserServices } from "../../services/user";
import { Project } from "../../models/project";
import { ProjectServices } from "../../services/project";

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,

  ],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class ProjectComponent {
  project : FormGroup;
  projects: Project[];
  manager: number | undefined =this.connexion.getCurrentUser().id;

  constructor(private fb: FormBuilder, private projectServices: ProjectServices, private router : Router, private connexion : UserServices) {

    this.project = this.fb.group({
      id:[1, Validators.required],
      name: ['', Validators.required],
      desc: ['', Validators.required],
      nbOfMembers: [1, Validators.required],
      maxNbOfMembers: [1, Validators.required],
      manager: [this.manager, Validators.required],
      members: [[this.manager], Validators.required]
    });
    this.projects=this.project.value;
  }
  onSubmit() {
    this.projectServices.addProject(this.project.value).subscribe({
      next: data => {
        console.log(data);
        this.router.navigateByUrl('/home');
      },
      error: err => console.error(err)
    });
  }

}


