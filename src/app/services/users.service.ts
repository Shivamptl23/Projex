import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http_:HttpClient) { }

  apiUrl = 'http://localhost:3000/users';

  addUser(data:any): Observable<any>{
    return this._http_.post('http://localhost:3000/users',data);
  }

  getUsers(): Observable<any>{
    return this._http_.get('http://localhost:3000/users');
  }

  getUserById(id:any): Observable<any>{
    return this._http_.get('http://localhost:3000/users/'+id);
  }
  
  getAllRoles(){
    return this._http_.get('http://localhost:3000/roles')
  }

  login(data:any){
    return this._http_.get('http://localhost:3000/users?username='+data.username+'&password='+data.password)
  }

  isLoggedIn(){
    return sessionStorage.getItem('username') != null;
  }
  getUserrole(){
    return sessionStorage.getItem('role')!= null?sessionStorage.getItem('role')?.toString():'';
  }

  updateUser(id:any,inpudata:any){
    return this._http_.put('http://localhost:3000/users/'+id,inpudata);
  }
}
