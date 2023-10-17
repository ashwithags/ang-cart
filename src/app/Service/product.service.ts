import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private ProductUrl='https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  getProductList():Observable<any>{
     return this.http.get<any>(this.ProductUrl).pipe(
      catchError(this.hadelError)
     )
  }



 fetchSingleProduct(prodId:any):Observable<any>{

    return this.http.get('https://dummyjson.com/products/'+prodId).pipe(
      catchError(this.hadelError)
    )

  }


  getProductCategory(category:String):Observable<any>{
      return this.http.get<any>('https://dummyjson.com/products/category/'+category).pipe(
        catchError(this.hadelError)
      )
  }









  private hadelError(err:HttpErrorResponse):Observable<any>{
    let errMsg;
    if(err.error instanceof Error){
      errMsg = err.message;
    }
    else{
      errMsg = err.status;
    }
    return throwError(errMsg);
  }

}
