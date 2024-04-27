import { Component } from '@angular/core';
import { UserServices } from "../../services/user";
import { FooterComponent } from "../../components/html-footer/footer";
import { HeaderComponent } from "../../components/html-header/header";
import { NavbarComponent } from "../../components/html-navbar/navbar";
import { ProjectsComponent } from "../../components/projects-all/projects";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      FooterComponent,
      HeaderComponent,
      NavbarComponent,
      ProjectsComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  currentUserName: string | undefined = this.currentUser.getCurrentUser().name;

  constructor(private currentUser: UserServices) {}

}


