import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  constructor(private _http_: HttpClient) {}

  
  getTasks(): Observable<any> {
    return this._http_.get('http://localhost:3000/tasks');
  }

  getTaskById(id: number): Observable<any> {
    return this._http_.get(`http://localhost:3000/tasks/${id}`);
  }

  addTask(data: any): Observable<any> {
    return this._http_.post('http://localhost:3000/tasks', data);
  }

  deleteTask(id: number): Observable<any> {
    return this._http_.delete(`http://localhost:3000/tasks/${id}`);
  }

  updateTask(id: number, data: any): Observable<any> {
    return this._http_.put(`http://localhost:3000/tasks/${id}`, data);
  }


}
