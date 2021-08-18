import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent} from './product/component/product/product.component';
import { CartComponent } from './cart/cart.component';

import { ProductsComponent } from './product/component/products/products.component';
//import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule} from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductsDetailComponent } from './product/component/products-detail/products-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule} from './shared/shared.module'

import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    //ProductComponent,
    CartComponent,
    DemoComponent,
    //ProductsComponent,
    //ProductsDetailComponent,
    PageNotFoundComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
