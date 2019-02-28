import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model'
import { Router } from '@angular/router';
import { Sucursal } from '../sucursal.model';


@Component({
    selector: 'app-products-list',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css'] 

})
export class ProductListComponent implements OnInit{

    @Input() products:Product[];
    @Input() sucursales: Sucursal[];
    
    @Output() changeState: EventEmitter<any> = new EventEmitter<any>();
    @Output() deleteProduct: EventEmitter<any> = new EventEmitter<any>();
    
    constructor(private router:Router){}

    ngOnInit(){
    }

    handleDelete(product : Product){
        this.deleteProduct.emit(product);
    }

    handleState(product: Product){
        this.changeState.emit(product);
    }

    handleUpdate(id:number){
        this.router.navigate(['productos', id])
    }
}