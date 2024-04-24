import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

// TODO Liste des imports
import { SingInService } from "../services/signin";
import { InscriptionService } from "../services/signup";

@Component({
    selector: 'app-root',
    standalone: true,
    // TODO liste des composants des imports
    providers: [SingInService, InscriptionService],
    imports: [RouterOutlet, HttpClientModule],
    templateUrl: './component.html',
    styleUrl: 'component.css'
})

export  class AppComponent {
    title = 'ProjetDFS'
}