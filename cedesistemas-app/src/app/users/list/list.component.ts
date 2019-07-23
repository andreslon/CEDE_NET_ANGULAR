import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../user.model';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['FullName', 'Nit', 'BirthDay', 'Ranking', 'IsAdmin', 'Edit', 'Delete'];
  dataSource: MatTableDataSource<UserModel>;
  private isLoading: boolean = true;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    private usersService: UsersService, 
    private dialog: MatDialog, 
    private translate: TranslateService,
    private router: Router
    ) { }

  ngOnInit() {
    this.load();
  }
  load() {
    this.usersService.getAll().subscribe(
      (data: UserModel[]) => {
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(data);
      },
      (error: any) => {
        this.isLoading = false;
        alert(error)
      }
    );
  }
  delete(element: UserModel) {
 
    this.translate.get("User.DeleteMessage").subscribe((msg:string)=>{

      let dialogResponse = this.dialog.open(DialogComponent, {
        data: {
          title: element.Name + " " + element.LastName, 
          message: msg
        }
      });
  
      dialogResponse.afterClosed().subscribe(result=>{
        if(result){
          this.usersService.delete(element.Id).subscribe(
            (data) => {
              this.isLoading = false;
              this.load();
            },
            (error) => {
              this.isLoading = false;
              alert(error)
            }
          );
        }
      });

    });
 
  }
  edit(userId){
     this.router.navigate(["/users/add", {id: userId}]);
  }
}
