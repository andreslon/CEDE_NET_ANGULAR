import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['FullName', 'Nit', 'BirthDay', 'Ranking','IsAdmin', 'Edit', 'Delete'];
  dataSource: MatTableDataSource<UserModel>;
  private isLoading:boolean= true;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.load();
  }
  load(){
    this.usersService.get().subscribe(
      (data:UserModel[])=>{ 
        this.isLoading=false;
        this.dataSource = new MatTableDataSource(data);
      },
      (error:any)=>{
          this.isLoading=false;
          alert(error)
      }
    );
  }
  delete(element:UserModel){ 
      this.usersService.delete(element.Id).subscribe(
        (data)=>{
          this.isLoading=false;
          this.load();
        },
        (error)=>{
          this.isLoading=false;
          alert(error)
        } 
      );
  }

}
