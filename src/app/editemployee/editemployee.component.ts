import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Models/employee.model';
import { EmployeeserviceService } from '../services/employeeservice.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phoneNumber: 0
  }

  constructor(private route: ActivatedRoute, private employeeservice: EmployeeserviceService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeservice.getEmployee(id)
            .subscribe({
              next: (response) => {
                this.employeeDetails = response;
              }
            })

        }
      }
    })

  }

  updateEmployee() {
    this.employeeservice.updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['viewUser'])
        }
      })
  }

  deleteEmployee() {
    this.employeeservice.DeleteEmployee(this.employeeDetails.id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['viewUser'])
        }
      })
  }

}
