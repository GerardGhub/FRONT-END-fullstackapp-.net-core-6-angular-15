import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    phone: 0,
    salary: 0,
    department: '',
    email: ''
  };

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id)
            .subscribe({
              next: (response) => {
                this.employeeDetails = response;
              },
              error: (response) => {
                console.log(response);
              }
            });
        }
      }
    })
  }


  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
