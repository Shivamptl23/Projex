import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  hide = true;
  

roles: Roles[] = [
  {value:'admin',viewValue:'Admin'},
  {value:'employee',viewValue:'Employee'},
  {value:'projectmanager',viewValue:'Project Manager'}
]
  constructor(private formBuilder:FormBuilder){ }

  profileForm = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    dob:[''],
    gender:['']
});



}


export interface Roles{
  value:string,
  viewValue:string
}
