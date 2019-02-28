import {  Route } from '@angular/router';
import { ProductComponent } from './products/product.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProducEditComponent } from './products/product-edit/product-edit.component';

export const routes:Route[] = [

       {
              path: 'productos',
              component: ProductComponent
       },
      
       {
              path: 'sucursal/list',
              component: ProductComponent
       },

       {
              path: '',
              redirectTo: 'productos',
              pathMatch: 'full'
       },
       
       {
              path: 'nuevo-producto',
              component: ProductCreateComponent
       },

       {
              path:'productos/:id',
              component: ProducEditComponent
       }


]