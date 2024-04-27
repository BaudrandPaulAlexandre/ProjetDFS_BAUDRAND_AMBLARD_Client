import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../models/user";

@Injectable({
    providedIn: 'root'
})

export class UserServices {
    private apiUrl = 'http://localhost:3333/users/';
    public currentUser : User | undefined;
    constructor(private http: HttpClient) { }

    login(name: string, password: string): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            this.http.post<User>(this.apiUrl + 'login', { name, password }).subscribe(
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

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl, {withCredentials: true });
    }

    getCurrentUser(): User {
        return <User>this.currentUser;
    }

    getUserById(id: number | undefined): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl + `get/${id}`, { withCredentials: true});
    }

    addUser(user: User | undefined): Observable<any> {
        return this.http.put(this.apiUrl + 'add', user,{ withCredentials: true});
    }
}
