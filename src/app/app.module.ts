import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './components/employee.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModuleModule} from "./material-module.module"

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,HttpClientModule,MaterialModuleModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
