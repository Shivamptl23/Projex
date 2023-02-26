import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { UsersComponent } from './users/users.component';
import { ReportComponent } from './report/report.component';
import { TasksComponent } from './tasks/tasks.component';
import { ListprojectComponent } from './listproject/listproject.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { AuthGuard } from './guard/auth.guard';
import { ListuserComponent } from './listuser/listuser.component';

const routes: Routes = [

  { path: '', component: HomeComponent,},
  { path: 'home', component: HomeComponent,},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'tasks/:id', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'listtasks', component: ListtaskComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'viewproject/:id', component: ViewprojectComponent, canActivate: [AuthGuard] },
  { path: 'listproject', component: ListprojectComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path:'listusers',component:ListuserComponent,canActivate:[AuthGuard]},
  { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
