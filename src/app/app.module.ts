import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from "@angular/common/http";
import {MaterialModuleModule} from "./material-module.module"
import {lazyRoute} from "./routes/app.routes";
import {testComponent} from "./test.component";
import {EmployeeComponent} from "./components/employee.component";


@NgModule({
  declarations: [
    AppComponent,testComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,HttpClientModule,MaterialModuleModule,lazyRoute
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
