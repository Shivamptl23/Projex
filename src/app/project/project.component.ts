import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator } from "@angular/forms";
import { ProjectService } from '../services/project.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from "@angular/material/sort";
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';


//Interfaces Declaration Part 
export interface Project {
  ProjectID :number;
  ProjectName :string;
  ProjectMember:string;
  Date:number;
  DueDate:number;
  Status:string; 
  Progress:number;
}
export interface Status {
  value: string;
  viewValue: string;
}
export interface Manager {
  managerName: string;
}
export interface Employee {
  employeeName: string;
}


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit{

  displayedColumns: string[] = [
    'id', 
    'projectName', 
    'projectMember', 
    'projectManager',
    'status',
    'projectDesc',
    'startingDate',
    'dueDate',
    'action'
  ];


  

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Variable Declaration Part

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
  projectForm: FormGroup;
// Constructor Part
  constructor(private formBuilder: FormBuilder, private _projectSercice:ProjectService,private _http_:HttpClient ) { 
    this.projectForm = this.formBuilder.group({

      projectName:'',
      projectManager:'',
      projectMember:'',
      startingDate:'',
      dueDate:'',
      status:'',
      projectDesc:''

    })
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProjectDetails();
  }

//Function Declaration Part
  addProject() {
    if (this.projectForm.valid) {
      this._projectSercice.addProject(this.projectForm.value).subscribe({
        next: (val:any) =>{
          alert('Projet Added Successfully')
        },
        error:(err: any)=>{
          console.error(err)
        }
      });
    }
  }

  getProjectDetails(){
    this._projectSercice.getProject().subscribe({
      next: (res:any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error:(err) =>{
        console.error(err);
      }
    });
  }

  deleteProjectDetails(id:number){
    this._projectSercice.deleteProject(id).subscribe({
      next: (res) =>{
        alert('Project Deleted');
        this.getProjectDetails()
      },
      error:(err)=>{
        console.error(err);
      }
    });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    

}




  function deleteData() {
    throw new Error('Function not implemented.');
  }

