import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from 'ngx-toastr';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-updatepop',
  templateUrl: './updatepop.component.html',
  styleUrls: ['./updatepop.component.css']
})
export class UpdatepopComponent implements OnInit {

  rolelist:any;
  editdata:any;

  constructor(private formBuilder: FormBuilder,private service: UsersService,@Inject(MAT_DIALOG_DATA) public data:any,private toastr:ToastrService,private dialog:MatDialogRef<UpdatepopComponent>) {
    
  }
  ngOnInit(): void {
    this.service.getAllRoles().subscribe((data:any)=>{
      this.rolelist = data;
      console.log(this.rolelist);
    })
    if (this.data.userid != null && this.data.userid != '') {
      this.service.getUserById(this.data.userid).subscribe((data:any)=>{
        this.editdata = data;
        this.updateForm.setValue({
          id: this.editdata.id,
          firstname: this.editdata.firstname,
          lastname: this.editdata.lastname,
          username: this.editdata.username,
          email: this.editdata.email,
          password: this.editdata.password,
          role: this.editdata.role,
          gender: this.editdata.gender,
          phone: this.editdata.phone,
          isActive: this.editdata.isActive
        })
        console.log(this.editdata);
      })
    }
  }

  updateForm = this.formBuilder.group({
    id: this.formBuilder.control(''),
    firstname: this.formBuilder.control(''),
    lastname: this.formBuilder.control(''),
    username: this.formBuilder.control(''),
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
    role: this.formBuilder.control(''),
    gender: this.formBuilder.control(''),
    phone: this.formBuilder.control('',Validators.required),
    isActive: this.formBuilder.control(false)
  })

  updateUser(){
    if (this.updateForm.valid) {
      this.service.updateUser(this.updateForm.value.id,this.updateForm.value).subscribe((data:any)=>{
        this.toastr.success("User Updated Successfully");
        this.dialog.close();
      })
    } else{
      this.toastr.error("Please fill all the required fields");
    }
  }

}
