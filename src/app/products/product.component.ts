import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

import { ProductService } from '../services/product-service';
import { Sucursal } from './sucursal.model';
import { SucursalService } from '../services/sucursal-services';

@Component({
    selector: 'app-products',
    templateUrl:'./product.component.html'
})
export class ProductComponent  implements OnInit {
    product: Product[];
    sucursal: any;


    constructor(private productService : ProductService,
                private sucursalService: SucursalService){}

    ngOnInit(){
        this.product = [];
        this.getProducts();
        this.sucursal = [];
        this.getSucursal();

    }

    private getProducts(){
        this.productService.getProducts().subscribe((products: Product[]) =>{
            console.log(products);
            this.product = products;

        })
    }

    private getSucursal(){
        this.sucursalService.getSucursales().subscribe(
            (sucursales: Sucursal[]) =>{
            console.log(sucursales);
            this.sucursal = sucursales;
        })
    }


    changeState(product : Product){
        this.product.map(prod =>{
            if (prod.id === product.id){
                prod.actived = !prod.actived
            }
        })
    }

    deleteProduct(product: Product){
        const { id } = product;
        
        this.productService.deleteProduct(id)
        .subscribe(response =>{
            this.product = this.product.filter(prod => prod.id !== id);
        })
    }


}