import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { SingInService } from "../services/signin";
import { InscriptionService } from "../services/signup";
import { ProjectService } from "../services/projects";

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [
        SingInService,
        InscriptionService,
        ProjectService
        ],
    imports: [
        RouterOutlet,
        HttpClientModule],
    templateUrl: './component.html',
    styleUrl: 'component.css'
})

export  class AppComponent {
    title = 'ProjetDFS'
}