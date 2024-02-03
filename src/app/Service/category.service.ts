import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  jsonUrl = 'https://dummyjson.com/products/categories';

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.jsonUrl).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.HandleError)
    )
  }

  HandleError(err: HttpErrorResponse): Observable<any> {
    let errorMessage;
    if (err instanceof Error) {
      errorMessage = err.error;
    }
    else {
      errorMessage = "Unknow Error";
    }
    return errorMessage;
  }

}
