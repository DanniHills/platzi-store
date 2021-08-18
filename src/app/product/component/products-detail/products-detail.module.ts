import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDetailComponent } from './products-detail.component';

import { ProductDetailRoutingModule } from './products-detail-routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ProductsDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductDetailRoutingModule
  ]
})
export class ProductsDetailModule { }
