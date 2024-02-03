import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})

export class EmployeeService{

    constructor(private http:HttpClient){};

    getEmployeeList():Observable<any>{
       return this.http.get<any>('https://reqres.in/api/users?page=2').pipe(
            catchError(this.HandleError)
        )
    }

    deleteEmp(id:Number):Observable<any>{
        return this.http.delete<any>('https://reqres.in/api/users/'+id).pipe(
            catchError(this.HandleError)
        )
    }
    HandleError(err:HttpErrorResponse):Observable<any>{
        let errorMsg;
        if(err instanceof Error){
            errorMsg = err.error;
        }
        else{
            errorMsg = 'unknown Error';
        }
        return errorMsg;
    }

}