import { Component } from '@angular/core';
import { SingInService } from "../../services/signin";

// TODO: import Header, NavBar et Footer
import { FooterComponent } from "../../components/html-footer/footer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      // TODO: imports
      FooterComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  currentUserName: string | undefined = this.currentUser.getCurrentUser().name;

  constructor(private currentUser: SingInService) {}

}


