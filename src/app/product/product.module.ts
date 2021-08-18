import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products/products.component';
import {ProductsDetailComponent} from './component/products-detail/products-detail.component'
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import {ProductComponent} from './component/product/product.component'

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
