import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProductComponent} from './components/product.component';
import { CartComponent } from './cart/cart.component';
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
