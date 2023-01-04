import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

employees: Employee[] = [
  {
    id: 'sdsdsd23232sfsf',
    name: 'Gerard',
    email: 'singian28@gmail.com',
    phone: 23232323,
    salary: 1212,
    department: 'MIS'
  }
];

ngOnInit(): void {
  
}


}
