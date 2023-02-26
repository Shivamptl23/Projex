import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { TasksService } from '../services/tasks.service';
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee, Manager, Status } from '../project/project.component';



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


  constructor(private formBuilder:FormBuilder,private router:Router,private service:TasksService){}

  taskForm = this.formBuilder.group({
    projectName: this.formBuilder.control('', Validators.required),
    taskName: this.formBuilder.control('', Validators.required),
    status: this.formBuilder.control('',Validators.required),
    starttingDate: this.formBuilder.control('',Validators.required),
    dueDate: this.formBuilder.control('',Validators.required),
    projectMember: this.formBuilder.control('',Validators.required),
    taskDescription: this.formBuilder.control('',Validators.required)
  })

  addTask(){
    this.service.addTask(this.taskForm.value).subscribe({
      next: (res:any) => {
        this.router.navigate(['/listtasks']);
      },
      error:(err: any)=>{
        console.error(err)
      }
    });
  }
  

}
