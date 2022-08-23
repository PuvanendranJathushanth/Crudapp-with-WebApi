import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  { path: 'viewUser', component: EmployeelistComponent },
  { path: 'adduser', component: AddemployeeComponent },
  {path:'edituser/:id',component:EditemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
