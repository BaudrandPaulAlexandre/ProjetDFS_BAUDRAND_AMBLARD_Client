import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserServices } from '../../services/user';
import { NgIf } from "@angular/common";


@Component({
    selector: 'app-signin-form',
    templateUrl: './form-signin.html',
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        RouterLink
    ],
    styleUrls: ['./form-signin.css'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignInFormComponent implements OnInit {
    name = '';
    password = '';
    connected = false;

    constructor(private signInService: UserServices, private router: Router) {}

    ngOnInit(): void {
    }

    login() {
        this.connected = false;
        this.signInService.login(this.name, this.password).subscribe(result => {
            if (result && this.signInService.isloggedIn()) {
                localStorage.setItem('token', Math.random().toString());
                this.router.navigateByUrl('/home');
            } else {
                this.connected = true;
            }
        }, error => {
            this.connected = true;
        });
    }

    logout() {
        const confirmation=confirm('Voulez vous vous déconnecter');
        if (confirmation){
            localStorage.removeItem('token');
            this.router.navigateByUrl('/signin');
        }
    }
}
