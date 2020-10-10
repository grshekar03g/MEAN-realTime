import {LazyModule} from "../modules/lazy.module"
import  {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router"

export const appRoute:Routes=[{
    path:"",loadChildren:():any=>import("../modules/lazy.module").then(obj=>obj.LazyModule)
}]

export const lazyRoute:ModuleWithProviders<any>=RouterModule.forRoot(appRoute);