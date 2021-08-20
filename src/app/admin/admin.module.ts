import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import {MaterialModule} from './../material/material.module';
import { TableComponent } from './components/table/table.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { LayoutModule } from '@angular/cdk/layout';
import { TreeComponent } from './components/tree/tree.component';


@NgModule({
  declarations: [
    ProductFormComponent, 
    NavComponent, 
    TableComponent, 
    DashboardComponent,
    TreeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule,
  ]
})
export class AdminModule { }