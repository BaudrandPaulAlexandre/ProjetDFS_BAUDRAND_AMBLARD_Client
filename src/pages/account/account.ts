import { Component } from '@angular/core';
import { FooterComponent } from "../../components/html-footer/footer";
import { NavbarComponent} from "../../components/html-navbar/navbar";
import { ProjectsCurentUserManagerComponent } from "../../components/projects-current-user-manager/projects";
import { ProjectsCurentUserMemberComponent } from "../../components/projects-current-user-member/projects";

@Component({
  selector: 'app-account',
  standalone: true,
    imports: [
        FooterComponent,
        NavbarComponent,
        ProjectsCurentUserManagerComponent,
        ProjectsCurentUserMemberComponent
    ],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class AccountPage {

}
