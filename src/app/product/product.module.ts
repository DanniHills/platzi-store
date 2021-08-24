import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent} from './component/products-detail/product-detail.component'
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent} from './component/product/product.component'
import { MaterialModule}from './../material/material.module';

@NgModule({
  declarations: [
    ProductsContainer,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
