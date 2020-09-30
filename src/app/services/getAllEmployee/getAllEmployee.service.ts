import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import BASE_URL from "../../config/endPoints/urls"

@Injectable({
    providedIn:"root"
})

export class GetAllEmployee{
    constructor(public http:HttpClient){}

    public getEmpData():Observable<any>{
        return this.http.get(BASE_URL+"/fetch");
    }
}