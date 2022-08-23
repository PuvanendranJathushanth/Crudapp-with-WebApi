import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeeserviceService } from '../services/employeeservice.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: Employee[] = []
  constructor(private employeeservice: EmployeeserviceService) { }

  ngOnInit(): void {
    this.employeeservice.getAllEmployees()
      .subscribe({
        next: (empLoyees) => {
          this.employees = empLoyees;
          // console.log(empLoyees)
        },
        error: (response) => {
          console.log(response);
        }
      })
  }

}
