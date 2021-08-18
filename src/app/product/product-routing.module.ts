import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { ProductsDetailComponent } from './component/products-detail/products-detail.component';

const routes: Routes=[
{
    path:'',
    component:ProductsComponent
},
{
    path:'/id',
    component: ProductsDetailComponent
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
export class ProductRoutingModule{}