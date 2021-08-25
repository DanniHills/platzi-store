import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '@core/service/products/products.service';
import { Product } from '../../../product.model';
import {switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
   this.product$ = this.route.params
    .pipe(
      switchMap((params: Params)=>{
         return this.productsService.getProduct(params.id)
      })
    )
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
     console.log(product)
    });
  }
  createProduct(){
    const newProducto : Product={
      id:'222',
      title: 'producto nuevo desde angular',
      image:'assets/images/banner-1.jpg',
      price: 450000,
      description:"nuevo producto"

    }
    this.productsService.createproduct(newProducto)
    .subscribe(producto => {
      console.log( producto);
    })
  }
  
  updateProduct(){
    const updateProducto : Partial<Product>={
      title: 'producto actualizado desde angular',
      description:"actualizado producto"

    }
    this.productsService.updateProduct('222',updateProducto)
    .subscribe(producto => {
      console.log( producto);
    })
  }
  deleteProduct(){
    this.productsService.deleteProducto('222')
    .subscribe(producto =>{
      console.log(producto);
    })
  }
getRandomUsers(){
  this.productsService.getRandomUsers()
  .subscribe(
    users=>{
      console.log(users);
    },
    error =>{
      console.error('error',error);
    }
  )
}
getFile() {
  this.productsService.getFile()
  .subscribe(content => {
    console.log(content);
    const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'hola.txt');
  });  
}
}