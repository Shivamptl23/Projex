import { Component } from '@angular/core';
import { Login } from '../login';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  // signin:Login = new Login();
  userdata: any;
  // userdata:Login = new Login()
  constructor(private _login: UsersService, private router: Router, private formBuilder: FormBuilder, private toastr: ToastrService, private app: AppComponent) {
    sessionStorage.clear();
  }

  loginForm = this.formBuilder.group({
    username: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
  })


  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginForm.valid) {
      this._login.login(this.loginForm.value).subscribe((res: any) => {
        this.userdata = res;
        if (this.userdata && this.userdata.length > 0 && this.userdata[0].password == this.loginForm.value.password) {
          if (this.userdata[0].isActive) {
                sessionStorage.setItem('username', this.userdata[0].id);
                sessionStorage.setItem('role', this.userdata[0].role);
                this.toastr.success("Login Successfull");
                this.app.isVisible = false;
                this.router.navigate(['/dashboard']);
              }
              else {
                this.toastr.error("Please contact admin for enable access", 'In Active User');
              }
      } else {
          this.toastr.error("Invalid Username or Password");
      }
      
      })

    }
  }
}
