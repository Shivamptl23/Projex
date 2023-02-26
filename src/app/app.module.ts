import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ProjectComponent } from './project/project.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { ReportComponent } from './report/report.component';
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule,  } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from "@angular/material/expansion";
import { ListprojectComponent } from './listproject/listproject.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgChartsModule } from 'ng2-charts';
import { UpdatepopComponent } from './updatepop/updatepop.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectComponent,
    TasksComponent,
    UsersComponent,
    ReportComponent,
    ListprojectComponent,
    ListtaskComponent,
    ListuserComponent,
    LoginComponent,
    SignupComponent,
    ViewprojectComponent,
    HomeComponent,
    UpdatepopComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatProgressBarModule,
    FormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatPaginatorModule,
    MatExpansionModule,
    ToastrModule.forRoot(),
    MatRadioModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    MatDialogModule,
   MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
