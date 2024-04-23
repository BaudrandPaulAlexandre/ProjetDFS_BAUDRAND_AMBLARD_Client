import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

// TODO Liste des imports

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [],
    imports: [RouterOutlet, HttpClientModule],
    templateUrl: './component.html',
    styleUrl: 'component.css'
})

export  class AppComponent {
    title = 'ProjetDFS'
}