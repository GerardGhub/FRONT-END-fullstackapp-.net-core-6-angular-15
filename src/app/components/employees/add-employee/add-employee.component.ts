import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  addEmpRequest: Employee = {
    id: '',
    name: '',
    phone: 0,
    salary: 0 ,
    department:'',
    email:''
  }

constructor (private employeeService: EmployeesService, private router: Router) {

}

ngOnInit(): void {
  
}

addEmployee() {
 this.employeeService.addEmployee(this.addEmpRequest)
 .subscribe({
  next: (employee) => {
    this.router.navigate(['employees']);
  },
  error: (response) => {
    console.log(response);
  }
  
 });
}

}
