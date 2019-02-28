import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service';
import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html'
})
export class ProductCreateComponent{
    constructor(private router: Router,
                private productService : ProductService){}

   handleSubmit(product:Product){
       this.productService.createProduct(product)
       .subscribe(response => {
           this.router.navigate(['/productos'])
       }
           
       )}

   }
