import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})

export class SingInService {
    private apiUrl = 'http://localhost:3333/users/login';
    public currentUser : User | undefined;
    constructor(private httpClient: HttpClient) { }

    login(name: string, password: string): Observable<boolean> {
        console.log('login server')
        return new Observable<boolean>((observer) => {
            this.httpClient.post<User>(this.apiUrl, { name, password }).subscribe(
                (user: User) => {
                    this.currentUser = user;
                    console.log(this.currentUser);
                    observer.next(true);
                    observer.complete();
                },
                (error) => {
                    observer.error(false);
                    observer.complete();
                }
            );
        });
    }

    isloggedIn() : boolean {
        return !!this.currentUser;
    }

    getCurrentUser(): User {
        return <User>this.currentUser;
    }
}
