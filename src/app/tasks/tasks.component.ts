import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { TasksService } from '../services/tasks.service';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee, Manager, Status } from '../project/project.component';
import { ProjectService } from '../services/project.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  status: Status[] = [
    { value: 'pending', viewValue: 'Pending' },
    { value: 'on-hold', viewValue: 'On-Hold' },
    { value: 'done', viewValue: 'Done' }
  ];

  managers: Manager[] = [
    { managerName: 'Diana Ruths' },
    { managerName: 'John Doe' },
    { managerName: 'Smith Stone' }
  ];

  employees: Employee[] = [
    { employeeName: 'John Doe' },
    { employeeName: 'Diana Ruths' },
    { employeeName: 'Shivam Siyani' },
    { employeeName: 'Smith Stone' }
  ]

 
projects: any;


  constructor(private formBuilder:FormBuilder,private router:Router,private service:TasksService,private project:ProjectService, private toastr:ToastrService){}

  taskForm = this.formBuilder.group({
    projectName: this.formBuilder.control('', Validators.required),
    taskName: this.formBuilder.control('', Validators.required),
    status: this.formBuilder.control('',Validators.required),
    startingDate: this.formBuilder.control('',Validators.required),
    dueDate: this.formBuilder.control('',Validators.required),
    projectManager: this.formBuilder.control('',Validators.required),
    taskDescription: this.formBuilder.control('',Validators.required)
  })

  ngOnInit(): void {
    this.project.getProject().subscribe({
      next: (res:any) => {
        this.projects = res;
      },
      error:(err: any)=>{
        console.error(err)
      }
    });
  }




  addTask(){
    if (this.taskForm.valid) {
      this.service.addTask(this.taskForm.value).subscribe({
        next: (res:any) => {
          this.router.navigate(['/listtasks']);
          this.toastr.success('Task Added Successfully');
        },
        error:(err: any)=>{
          this.toastr.error(err.message);
          console.error(err)

        }
      });
    }
  }
  

}
