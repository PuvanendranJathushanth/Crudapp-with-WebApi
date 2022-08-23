import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Employee } from '../Models/employee.model';
import { PopupComponent } from '../popup/popup.component';
import { EmployeeserviceService } from '../services/employeeservice.service';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addemployeeReq: Employee = {
    id: '',
    name: '',
    email: '',
    phoneNumber: 0
  }
  constructor(private employeeService: EmployeeserviceService, private router: Router,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.employeeService.addNewEmployye(this.addemployeeReq)
      .subscribe({
        next: (empLoyee) => {
          //For checking purpose the ad employee detail will print in console
          //console.log(empLoyee);

          this.router.navigate(['viewUser'])
        }
      })
  }

  openPopUp(){
    this.matDialog.open(PopupComponent)
  }
}

