import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../services/project.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from "@angular/material/sort";
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export interface Project{
  ProjectID :number;
  ProjectName :string;
  ProjectMember:string;
  Date:number;
  DueDate:number;
  Status:string; 
  Progress:number;
  
}


@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css']
})
export class ListprojectComponent implements OnInit{

  displayedColumns: string[] = [
    'id', 
    'projectName', 
    'projectMember', 
    'projectManager',
    'status',
    'startingDate',
    'dueDate',
    'action'
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
    this.getProjectDetails();
  }

  constructor(private _projectSercice:ProjectService,private _http_:HttpClient, private route:Router){

  }

  displayColumns:string[] = ['ProjectID','ProjectName','ProjectMember','Date','DueDate','Action']

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
    })
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
    })
  }

  displayProjectDetails(id:number){
    this.route.navigate(['/viewproject/',id]);
    
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }





}
