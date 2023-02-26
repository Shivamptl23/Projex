import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from "@angular/material/sort";
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent {


  dataSource!: MatTableDataSource<any>;
 
  displayedColumns: string[] = [
    'projectName',
    'taskName',
    'status',
    'startingDate',
    'dueDate',
    'projectManager', 
    'action'
  ]
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router:Router,private service:TasksService) { }

  
  ngOnInit(): void {
    this.getTaskDetails();
  }

  getTaskDetails(){
    this.service.getTasks().subscribe({
      next: (res:any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  deleteTaskDetails(id:number){
    this.service.deleteTask(id).subscribe({
      next: (res:any) => {
        this.getTaskDetails();
      }
    });
  }
  editTaskDetails(id:number){
    this.router.navigate(['/tasks',id]);
  }
  displayTaskDetails(id:number){
    this.router.navigate(['/taskview',id]);
  }
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
