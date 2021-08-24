import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model'
import { ProductsService } from '@core/service/products/products.service' 
@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainer implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }
  products: Product[] = [];

  ngOnInit() {
    this.fetchProducts();
  };
  clickProduct(id: number){
    console.log('product');
    console.log( id);
  };
  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(productos =>{
      this.products =productos;
      console.log(productos)
    })
  }
}
