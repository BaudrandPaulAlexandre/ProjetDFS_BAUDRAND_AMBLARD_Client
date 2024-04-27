import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../models/user";
import { UserServices } from "../../services/user";

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form-signup.html',
  styleUrl: './form-signup.css'
})
export class SignUpFormComponent {
  user: User = {
    id: 0,
    name: '',
    lastname: '',
    password: ''
  };

  name : string = ""
  lastname : string = ""
  password : string = ""

  constructor(private inscription : UserServices, private router: Router) { }

  signup() {

    console.log('signup');

    this.user.name = this.name;
    this.user.lastname = this.lastname;
    this.user.password = this.password;

    this.inscription.addUser(this?.user).subscribe(data => {
      console.log(data);
    });
    this.router.navigateByUrl('/signin');
  }
}
