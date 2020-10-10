import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeComponent} from "../components/employee.component";
import {MaterialModuleModule} from "../material-module.module"
import { AddEmployeeService } from '../services/addEmployee/addEmployee.service';
import { GetAllEmployeeService } from '../services/getAllEmployee/getAllEmployee.service';
import { UpdateEmployeeService } from '../services/updateEmployee/updateEmployee.service';
import { DeleteEmployeeService } from '../services/deleteEmployee/deleteEmployee.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from "@angular/router";
import {NgHttpLoaderModule } from "ng-http-loader";


@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,MaterialModuleModule,NgHttpLoaderModule.forRoot(),
    HttpClientModule,RouterModule.forChild([{path:"",component:EmployeeComponent}])
  ],
  providers:[AddEmployeeService,
    GetAllEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService],
  exports:[EmployeeComponent]
})
export class LazyModule { }
