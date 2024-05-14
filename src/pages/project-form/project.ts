import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/html-navbar/navbar";
import { FooterComponent } from "../../components/html-footer/footer";
import { ProjectComponent } from "../../components/form-project/project";

@Component({
  selector: 'app-project-form-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ProjectComponent
  ],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class ProjectFormPage {

}
