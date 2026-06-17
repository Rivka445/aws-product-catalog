import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private queryLambdaUrl = 'https://uxzdr7it5u5ilvd5ljwpat7dom0uqfdn.lambda-url.us-east-1.on.aws/'; 

  private getItemLambdaUrl = 'https://sr7k56endf6ztnnih6x5y6cifq0otaxp.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  getProductsByCategory(categoryCode: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.queryLambdaUrl}?category=${categoryCode}`);
  }

  getProductDetail(categoryCode: string, productId: string): Observable<any> {
    return this.http.get<any>(`${this.getItemLambdaUrl}?category=${categoryCode}&productId=${productId}`);
  }
}