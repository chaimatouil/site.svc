import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from '../model/result';
import { HttpHeaders } from '@angular/common/http'; 

const httpOptions = { 
  headers: new HttpHeaders( 
    {'Content-Type': 'application/json'} 
    )
  };

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURL: string = 'http://localhost:80/backend_st/config';

  products = [];
  prodSubject = new Subject<any[]>();
  constructor(private http: HttpClient){
    this.getProductsFromServer();
  }

  emitProducts(){
    this.prodSubject.next(this.products);
  }

  getProductsFromServer(){
    const url = `${environment.API+'products?'+environment.API_KEY}`;

    this.http.get(url).subscribe ;{
      (dataProducts: Result)=>{
        if(dataProducts.status == 200){
          this.products = dataProducts.result;
          this.emitProducts();
        }else{
          console.log("Error"+dataProducts.message);
        }
      }
    }
    
  }
}
