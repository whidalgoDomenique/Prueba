import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';


@Injectable()
export class SucursalService{
    private baseUrl : string;
    
    constructor(private http:HttpClient){
        this.baseUrl = environment.api2;
    }

    getSucursales(){
        const fullUrl = `${this.baseUrl}/sucursal/list`
        return  this.http.get(fullUrl);
    }

}