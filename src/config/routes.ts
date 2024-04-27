import { Routes } from '@angular/router';

// TODO import des différentes routes
import { authentification} from "./authentification";
import { SignInFormComponent } from "../components/form-signin/form-singin";
import { SignUpFormComponent } from "../components/form-signup/form-signup";
import { HomePage } from "../pages/home/home";
import { AccountPage } from "../pages/account/account";
import { ProjectsPage } from "../pages/projects/projects";

export const routes: Routes = [
    { path: '', redirectTo: 'singin', pathMatch: 'full' },
    { path: 'signin', component: SignInFormComponent },
    { path: 'signup', component: SignUpFormComponent },
    { path: 'home', component: HomePage, canActivate: [authentification] },
    { path: 'account', component: AccountPage, canActivate: [authentification]},
    { path: 'projects', component: ProjectsPage, canActivate: [authentification]},
    { path: '**', component: SignInFormComponent, canActivate:[authentification] }
]