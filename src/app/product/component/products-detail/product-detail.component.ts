import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/service/products/products.service';
import { Product } from '../../../product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
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
}