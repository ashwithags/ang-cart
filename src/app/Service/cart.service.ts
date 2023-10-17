import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartdetails(){
    return this.http.get('https://dummyjson.com/carts').pipe(
      catchError(this.handleError)
    )
  }

  handleError(err:HttpErrorResponse):Observable<any>{

    let errMsg;
    if(err instanceof Error){
      errMsg = err;
    }
    else{
      errMsg = err.error;
    }

    return throwError(errMsg);

  }

  
}
