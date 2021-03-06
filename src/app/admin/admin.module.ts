import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { MaterialModule} from './../material/material.module';
import { TableComponent } from './components/table/table.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { LayoutModule } from '@angular/cdk/layout';
import { TreeComponent } from './components/tree/tree.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


@NgModule({
  declarations: [
    ProductFormComponent, 
    NavComponent, 
    TableComponent, 
    DashboardComponent,
    TreeComponent,
    ProductsListComponent,
    OrderListComponent,
    FormProductComponent,
    ProductEditComponent],
  imports: [
    CommonModule, 
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ]
})
export class AdminModule { }
