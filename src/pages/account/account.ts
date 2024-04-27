import { Component } from '@angular/core';
import { FooterComponent } from "../../components/html-footer/footer";
import { HeaderComponent } from "../../components/html-header/header";
import { NavbarComponent} from "../../components/html-navbar/navbar";
// TODO: import forumulaire modification du compte
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
      //TODO: import formulaire modification du compte
  ],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class AccountPage {

}
