import { Component,OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employeeDetails:any[] = [];
  public newEmployee:any = {
   name:"",
    job:""
  }

  constructor(public employee:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }
  

  getEmployeeList(){
    this.employee.getEmployeeList().subscribe(
      data=>{
        this.employeeDetails = data.data;
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )

  }

  AddNewEmployee(){
    this.employeeDetails.push(this.newEmployee);
  }
  
  DeleteEmployee(id:Number){
    this.employee.deleteEmp(id).subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
