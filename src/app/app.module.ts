import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule} from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule} from './shared/shared.module'
import { CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import {  AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from './../environments/environment'
import { AngularFireStorageModule} from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LayoutComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
