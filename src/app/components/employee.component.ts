import { Component, OnInit, ViewChild } from '@angular/core';
import {GetAllEmployeeService} from "../services/getAllEmployee/getAllEmployee.service";
import {AddEmployeeService} from "../services/addEmployee/addEmployee.service";
import {UpdateEmployeeService} from "../services/updateEmployee/updateEmployee.service";
import {DeleteEmployeeService} from "../services/deleteEmployee/deleteEmployee.service";
import errHandling from "../error/errHandling";
import {MatTableDataSource} from "@angular/material/table";
import { Spinkit } from 'ng-http-loader';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'ems',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  spinnerStyle = Spinkit;
  public records:any;  
  public obj1:any;

  // @ViewChild(MatPaginator,{static:true})
  // public _paginator:MatPaginator;

  @ViewChild(MatPaginator) _paginator:MatPaginator;

  @ViewChild(MatSort,{static:true})
  public _sort:MatSort;

  public datasource:MatTableDataSource<any>;
  public displayedCloumns:string[]=["Select","empId","Name","Age","salary","dept","DOB","gender","languages","Actions"];

  constructor(public getEmpService:GetAllEmployeeService,
              public addEmpService:AddEmployeeService,
              public updateEmpService:UpdateEmployeeService,
              public deleteEmpService:DeleteEmployeeService) { }



  ngOnInit(): void {

    this.obj1=this.getEmpService.getEmpData().subscribe((posRes)=>{
        this.records=posRes;
        this.datasource=new MatTableDataSource(this.records);
        this.datasource.paginator=this._paginator;
        this.datasource.sort=this._sort;
    },errHandling)

  }


  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }


/********************************** */

  deleteEmp(empId){
    // console.log(empId)
    // alert("delete called.."+"/"+empId)
    this.deleteEmpService.deleteEmployee({"empId":empId}).subscribe((posRes)=>{
          if(posRes.delete=="success")
          {
           // alert("deleted successfully");

          let ins= this.records.findIndex((e,i)=>{
                return e.empId==empId
           })

            // alert(ins);
            this.records.splice(ins,1);
            this.datasource=new MatTableDataSource(this.records);


          }
    },errHandling)
  }

/********************************* */

updateEmp(empData){
  // console.log(empData.empId,empData.Name);
  alert("update called..."+empData.empId+"/"+ empData.Name)
}













  ngOnDestroy(){
    this.obj1.unsubscribe()
  }

}
