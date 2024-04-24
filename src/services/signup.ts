import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'
})

export class InscriptionService {

  private apiUrl = 'http://localhost:3333/users/add';

  constructor(private http: HttpClient) { }

  addUser(user: User | undefined): Observable<any> {
    return this.http.put(this.apiUrl , user,{ withCredentials: true})
  }
}
