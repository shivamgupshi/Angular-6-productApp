import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Product } from '../../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {
  private subject = new Subject<any>();

  //private url = 'api/products/product.json';
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.url).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProducts(product: Product) {

    return this.http.post(`http://localhost:3000/products`, product);

  }
  updateProduct(product: Product ,id:number) {

    return this.http.put(`http://localhost:3000/products/${id}`, product);

  }


  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(p => p.productId === id))
    );
  }

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }



  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
