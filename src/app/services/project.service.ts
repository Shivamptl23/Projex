import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl='http://localhost:3000/project/';
  apiUrls = "http://localhost:3000/"

  constructor(private _http_:HttpClient) { }

  addProject(data:any): Observable<any>{
    return this._http_.post(this.apiUrl,data);
  }
  getProject(): Observable<any>{
    return this._http_.get(this.apiUrl);
  }
  getProjectbyID(id:number){
    return this._http_.get(this.apiUrl+ id);
  }

  deleteProject(id:number): Observable<any>{
    return this._http_.delete(`http://localhost:3000/project/${id}`);
  }
}

