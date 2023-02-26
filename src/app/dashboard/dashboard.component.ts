import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { ChartConfiguration } from 'chart.js';



export interface Project {
  ProjectID: number;
  ProjectName: string;
  ProjectMember: string;
  Date: number;
  DueDate: number;
  Status: string;
  Progress: number;

}
const ELEMENT_DATA: Project[] = [
  {
    ProjectID: 1,
    ProjectName: 'Sample Project',
    ProjectMember: 'Shivam Siyani, John doe',
    Date: 4,
    DueDate: 2,
    Status: 'On-Progess',
    Progress: 50,

  },
  {
    ProjectID: 2,
    ProjectName: 'Sample Project 1',
    ProjectMember: 'Smith Stone',
    Date: 4,
    DueDate: 2,
    Status: 'On-Hold',
    Progress: 0,

  },
  {
    ProjectID: 3,
    ProjectName: 'Sample Project 2',
    ProjectMember: 'Diana Ruth',
    Date: 4,
    DueDate: 2,
    Status: 'Done',
    Progress: 100,

  }
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  constructor(private _http_: HttpClient, private _projectSercice: ProjectService) { }

  public barChartLegend = true;
  public barChartPlugins = [];
  public pieChartLegend = true;
  public pieChartPlugins = [];


  ngOnInit(): void {
    this.getProjectDetails();
  }


  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Projects' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Tasks' }
    ]
  };


  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

 
  getProjectDetails() {
    this._projectSercice.getProject().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  displayColumns: string[] = ['ProjectID', 'ProjectName', 'ProjectMember', 'Date', 'DueDate', 'Action']
  dataSource = ELEMENT_DATA;


}

