import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { ProductComponent} from './product/component/product/product.component';
import { CartComponent } from './cart/cart.component';

//import { ProductsComponent } from './product/component/products/products.component';
//import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule} from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductsDetailComponent } from './product/component/products-detail/products-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule} from './shared/shared.module'

import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout'
@NgModule({
  declarations: [
    AppComponent,
    //ProductComponent,
    CartComponent,
    DemoComponent,
    //ProductsComponent,
    //ProductsDetailComponent,
    PageNotFoundComponent,
    LayoutComponent,
    TableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
