import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  getProduct():Observable<any>{
    return this.http.get<any>("https://bookcart.azurewebsites.net/api/book/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  
}