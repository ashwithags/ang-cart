import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Product } from '../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get<any>(this.ProductUrl + '?limit=0').pipe(
      catchError(this.hadelError)
    )
  }


  fetchSingleProduct(prodId: number): Observable<Product> {

    return this.http.get<Product>(this.ProductUrl + '/' + prodId).pipe(
      catchError(this.hadelError)
    )

  }


  getProductCategory(category: any): Observable<any> {
  //  return this.http.get<any>(this.ProductUrl + '/category/' + category).pipe(
    return this.http.get<any>(category.url).pipe(

      catchError(this.hadelError)
    )
  }


  getLimitedProduct(limit: Number): Observable<any> {
    return this.http.get<any>(this.ProductUrl + '?limit=' + limit).pipe(
      catchError(this.hadelError)
    )
  }


  private hadelError(err: HttpErrorResponse): Observable<any> {
    let errMsg: any;
    if (err.error instanceof Error) {
      errMsg = err.message;
    }
    else {
      errMsg = err.status;
    }
    return throwError(errMsg);
  }

}
