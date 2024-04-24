import { Component } from '@angular/core';
import { SignInFormComponent } from "../../components/form-signin/form-singin";

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [
        SignInFormComponent
    ],
    templateUrl: './signin.html',
    styleUrl: './signin.css'
})
export class SignInComponent {

}
