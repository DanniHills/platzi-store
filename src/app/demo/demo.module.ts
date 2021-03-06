import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './component/demo/demo.component';
import {FormsModule} from '@angular/forms'
import { DemoRoutingModule } from './demo-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule {

}