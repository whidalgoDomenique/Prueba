import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { routes }  from './app.routing';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {  HeaderComponent } from './components/header/header.component';
import { ProductFormComponent } from './components/forms/product-form/product-form.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProducEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';

import { ProductComponent } from './products/product.component';



import { ProductService } from './services/product-service';
import { SucursalService } from './services/sucursal-services';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductComponent,
    ProductCreateComponent,
    ProducEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProductService,SucursalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
