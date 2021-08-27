import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule} from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule} from '@shared/shared.module'
import { CoreModule} from '@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment} from './../environments/environment'
import { AngularFireStorageModule} from '@angular/fire/storage';
import * as Sentry from "@sentry/angular";
import {AuthInterceptor} from './auth.interceptor';
import {QuicklinkModule} from 'ngx-quicklink'

import { Integrations } from "@sentry/tracing";
import { AuthService } from '@core/service/auth.service';
Sentry.init({
  dsn: "https://31fcd100404a466f9a40cfe539964fb0@o974816.ingest.sentry.io/5930690",
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["localhost", "https://yourserver.io/api"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});





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
    AngularFireStorageModule,
    QuicklinkModule
  
  ],
  providers: [
   { provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  
  }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
