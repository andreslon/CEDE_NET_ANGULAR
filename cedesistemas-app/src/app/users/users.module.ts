import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './users.routes';
import { MaterialModule } from '../material.module';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
  declarations: [ListComponent, AddEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule
  ]
})
export class UsersModule { }
