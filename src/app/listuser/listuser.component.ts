import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from "@angular/material/dialog";
import { UpdatepopComponent } from '../updatepop/updatepop.component';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private service: UsersService,private dialog: MatDialog) {
    this.loadUsers();
  }
  ngOnInit(): void {

    this.dataSource = new MatTableDataSource<any>;
  }
  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator)  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  loadUsers() {
    this.service.getUsers().subscribe((data) => {
      this.userlist = data;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.userlist[0].firstname);
    });
  }

  updateUser(id: any) {
    const popup = this.dialog.open(UpdatepopComponent,{
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'500ms',
      width:'50%',
      data:{
        userid:id
      }
    })
    popup.afterClosed().subscribe(res =>{
      this.loadUsers();
    });
  }
  openUpdate(){

  }

  displayedColumns: string[] = ['id', 'username', 'email', 'role','status','phone', 'action']

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
