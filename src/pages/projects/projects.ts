import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/html-header/header";
import { NavbarComponent } from "../../components/html-navbar/navbar";
import { FooterComponent } from "../../components/html-footer/footer";
import { ProjectComponent } from "../../components/form-project/project";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ProjectComponent
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsPage {

}
