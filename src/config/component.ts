import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { UserServices } from "../services/user";
import { ProjectServices } from "../services/project";

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [
        UserServices,
        ProjectServices
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