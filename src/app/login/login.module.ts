import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule} from '@material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { LoginRoutingModule} from './login-routing.module'

@NgModule({
    declarations: [
     FormLoginComponent,
     FormRegistroComponent],
    imports: [
      CommonModule, 
      ReactiveFormsModule,
      MaterialModule,
      LayoutModule,
      LoginRoutingModule
    ]
  })
  export class LoginModule { }
  