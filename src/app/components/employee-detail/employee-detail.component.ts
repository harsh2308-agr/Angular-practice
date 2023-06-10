import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
    public employees:any=[];
    constructor( private _employeeService:EmployeeService){}

    ngOnInit(){
      this.employees=this._employeeService.getEmployees();
    }
}
