import { Routes } from '@angular/router';
import { authentification} from "./authentification";
import { SignInFormComponent } from "../components/form-signin/form-singin";
import { SignUpFormComponent } from "../components/form-signup/form-signup";
import { HomePage } from "../pages/home/home";
import { AccountPage } from "../pages/account/account";
import { ProjectFormPage } from "../pages/project-form/project";
import { ProjectShowPage } from "../pages/project-show/project";

//TODO: réduire l'affichage des projets au nom, puis faire la redirection sur project/:id
// <button (click)="signUpToProject(project.id)">S'inscrire</button>

//TODO: inscription afficher si ce n'est pas le cas / le nombre total n'est pas atteint

export const routes: Routes = [
    { path: '', redirectTo: 'singin', pathMatch: 'full' },
    { path: 'signin', component: SignInFormComponent },
    { path: 'signup', component: SignUpFormComponent },
    { path: 'home', component: HomePage, canActivate: [authentification] },
    { path: 'account', component: AccountPage, canActivate: [authentification]},
    { path: 'project-form', component: ProjectFormPage, canActivate: [authentification]},
    { path: 'project/:id', component: ProjectShowPage, canActivate: [authentification]},
    { path: '**', component: SignInFormComponent, canActivate:[authentification] }
]