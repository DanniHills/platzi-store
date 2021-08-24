import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsService} from './service/products/products.service';
import { CartService } from './service/cart/cart.service'


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ProductsService,
    CartService
  ]
})
export class CoreModule { }
