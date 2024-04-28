import { Component } from '@angular/core';
import { FooterComponent } from "../../components/html-footer/footer";
import { HeaderComponent } from "../../components/html-header/header";
import { NavbarComponent} from "../../components/html-navbar/navbar";
import { ProjectComponent } from "../../components/project/project";

@Component({
  selector: 'app-project-show-page',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        ProjectComponent,
    ],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class ProjectShowPage {

}
