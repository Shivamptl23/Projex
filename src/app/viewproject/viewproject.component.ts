
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {


  projectId = 0;
  datas: Project = new Project();

  constructor(private _projectService: ProjectService, private _http_: HttpClient, private _activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

    this.projectId = this._activatedRoute.snapshot.params['id'];
    this.getProjectDetails();

  }


  getProjectDetails(){ 
    let projectData = this._projectService.getProjectbyID(this.projectId);
    projectData.subscribe((res:any)=>{
      this.datas = res;
    })
  };


}
