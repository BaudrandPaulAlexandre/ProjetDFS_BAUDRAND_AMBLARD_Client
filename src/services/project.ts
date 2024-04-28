import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Project } from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectServices {

  private apiUrl = 'http://localhost:3333/projects/';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl, { withCredentials: true });
  }

  getProjectById(id: number | undefined ): Observable<Project> {
    return this.http.get<Project>(this.apiUrl + `get/${id}`, { withCredentials: true });
  }

  addProject(project: Project): Observable<any> {
    return this.http.put(this.apiUrl + 'put', project,{ withCredentials: true })
  }

  delProject(id: number | undefined): Observable<any> {
    return this.http.delete( this.apiUrl + `del/${id}`,{ withCredentials: true })
  }

  addUser(idProject:number , idUser:number ): Observable<any> {
    return this.http.post(this.apiUrl + 'add',{idProject, idUser}, { withCredentials: true });
  }
}
