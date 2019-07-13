import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../user.model';


const ELEMENT_DATA: UserModel[] = [
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 4 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 1 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 2 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 3 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 4 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 6 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 4 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 4 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 1 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 2 },
  { Id: "GDA12", Name: "Andrés", LastName: "Londoño", Nit: 231312312, BirthDay: new Date(), IsAdmin: true, Ranking: 4 }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['FullName', 'Nit', 'BirthDay', 'Ranking','IsAdmin'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
