import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserModel } from '../user.model';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {


  private id: string;
  private name = new FormControl('', [Validators.required]);
  private lastName = new FormControl('', [Validators.required]);
  private nit = new FormControl('', [Validators.required]);
  private birthDay = new FormControl(new Date());
  private isAdmin = new FormControl(false);
  private ranking = new FormControl('0', [Validators.required]);

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id) {
        this.loadData();
      }
    });
  }
  goBack(): void {
    window.history.back();
  }
  loadData() {
    this.usersService.get(this.id).subscribe(
      (data:UserModel) => {
          this.name.setValue(data.Name);
          this.lastName.setValue(data.LastName);
          this.nit.setValue(data.Nit);
          this.birthDay.setValue(data.BirthDay);
          this.isAdmin.setValue(data.IsAdmin);
          this.ranking.setValue(data.Ranking);
      }, (error) => {

      });
  }
  clear() {
    this.name.reset();
    this.lastName.reset();
    this.nit.reset();
    this.birthDay.reset();
    this.isAdmin.reset();
    this.ranking.reset();
  }
  save(form: FormGroup) {

    let body: UserModel = {
      Id: this.id,
      Name: this.name.value,
      LastName: this.lastName.value,
      Nit: this.nit.value,
      BirthDay: this.birthDay.value,
      IsAdmin: this.isAdmin.value,
      Ranking: this.ranking.value
    };

    this.usersService.addUpdate(body).subscribe(
      (result: any) => {
        this.goBack();
      }
    )
  }
}
