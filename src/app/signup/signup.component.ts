import { Component } from '@angular/core';
import { Users } from "../users";
import { Roles } from '../users/users.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  roles: Roles[] = [
    { value: 'Employee', viewValue: 'Employee' },
    { value: 'Manager', viewValue: 'Manager' },
    { value: 'Admin', viewValue: 'Admin' }
  ]

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private users: UsersService,private router:Router,private app:AppComponent,private route:ActivatedRoute,private toastr: ToastrService) {
    this.signupForm = this.formBuilder.group({
      id:'',
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      role: '',
      gender:'',
      phone: '',
      isActive:'',
    });
  }

  signUp() {
    if (this.signupForm.valid) {
      this.users.addUser(this.signupForm.value).subscribe({
        next: (_data: any) => {
          this.app.isVisible = false;
          this.toastr.success('Please contact admin for enable access','User Account Created');
          this.router.navigate(['/dashboard'],{ relativeTo: this.route });
        },
        error: (err: any) => {
          console.error(err);
          this.toastr.error('User Account Creation Failed');
        }
      });
    }
  }


}
