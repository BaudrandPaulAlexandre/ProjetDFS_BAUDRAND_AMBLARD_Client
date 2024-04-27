import { Routes } from '@angular/router';

// TODO import des différentes routes
import { authentification} from "./authentification";
import { SignInComponent} from "../pages/singin/signin";
import { SignUpFormComponent } from "../components/form-signup/form-signup";
import { HomeComponent } from "../pages/home/home";
import { AccountComponent } from "../pages/account/account";
import { ProjectComponent } from "../components/form-project/project";

export const routes: Routes = [
    { path: '', redirectTo: 'singin', pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpFormComponent },
    { path: 'home', component: HomeComponent, canActivate: [authentification] },
    { path: 'account', component: AccountComponent, canActivate: [authentification]},
    { path: 'project', component: ProjectComponent, canActivate: [authentification]},
    { path: '**', component: SignInComponent, canActivate:[authentification] }
]