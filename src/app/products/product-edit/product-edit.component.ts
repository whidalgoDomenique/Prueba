import { OnInit, Component } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service';

@Component({
    selector: 'app-product-edit',
    templateUrl:'./product-edit.component.html'
})
export class ProducEditComponent implements OnInit{

    product: Product;

    constructor(private route: ActivatedRoute,
                private router : Router,
                private productService: ProductService  ){

    }
    ngOnInit(){
        const id = +this.route.snapshot.paramMap.get('id');
        this.productService.getProductsById(id).subscribe
        ((product:Product) => {
            this.product = product
        })

    }

    handleSubmit(product:Product){
        this.productService.updateProduct(product.id, product)
        .subscribe(response =>{
            this.router.navigate(['/productos']);
        });
    }

}



