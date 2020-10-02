import { Component, OnInit } from '@angular/core';
import {GetAllEmployeeService} from "../services/getAllEmployee/getAllEmployee.service";
import {AddEmployeeService} from "../services/addEmployee/addEmployee.service";
import {UpdateEmployeeService} from "../services/updateEmployee/updateEmployee.service";
import {DeleteEmployeeService} from "../services/deleteEmployee/deleteEmployee.service";
import errHandling from "../error/errHandling";
import {MatTableDataSource} from "@angular/material/table"

@Component({
  selector: 'ems',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  public records:any;  
  public obj1:any;

  public datasource:MatTableDataSource<any>;
  public displayedCloumns:string[]=["Select","empId","Name","Age","salary","dept","DOB","gender","languages","Actions"];

  constructor(public getEmpService:GetAllEmployeeService,
              public addEmpService:AddEmployeeService,
              public updateEmpService:UpdateEmployeeService,
              public deleteEmpService:DeleteEmployeeService) { }

  ngOnInit(): void {

    this.obj1=this.getEmpService.getEmpData().subscribe((posRes)=>{
        this.records=posRes;
        this.datasource=new MatTableDataSource(this.records)
    },errHandling)

  }

  ngOnDestroy(){
    this.obj1.unsubscribe()
  }

}
