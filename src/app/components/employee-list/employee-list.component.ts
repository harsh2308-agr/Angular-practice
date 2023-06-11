import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor( private _employeeService: EmployeeService){}
  public employees:any= [];
  public errorMsg="";
  ngOnInit(){
    this.employees=this._employeeService.getEmployees()
     .subscribe(data => this.employees = data
      , error=> this.errorMsg=error);
  }
}
