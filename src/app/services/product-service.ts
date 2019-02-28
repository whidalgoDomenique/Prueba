import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product} from '../products/product.model'
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService{
    private baseUrl : string;
    constructor(private http:HttpClient){
        this.baseUrl = environment.api;
    }

    getProducts(){
        const fullUrl = `${this.baseUrl}/productos`;
        return this.http.get(fullUrl);
    }

    getProductsById(id:number){
        const fullUrl = `${this.baseUrl}/productos/${id}`;
        return this.http.get(fullUrl);
    }

    updateProduct(id:number, product : Product){
        const fullUrl = `${this.baseUrl}/productos/${id}`;
        return this.http.put(fullUrl, product);
    }
    
    deleteProduct(id:number){
        const fullUrl = `${this.baseUrl}/productos/${id}`;
        return this.http.delete(fullUrl);
    }

    createProduct(product : Product){
        const fullUrl = `${this.baseUrl}/productos`;
        return this.http.post(fullUrl, product)
    }




}