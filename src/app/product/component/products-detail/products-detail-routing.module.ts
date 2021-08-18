import { Route } from '@angular/compiler/src/core';
import {NgModule} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProductsDetailModule } from './products-detail.module';

const routes: Routes=[

{
    path:'',
    component: ProductsDetailModule
}
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule    
    ]
})
export class ProductDetailRoutingModule{}