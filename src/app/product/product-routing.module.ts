import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { ProductDetailComponent } from './component/products-detail/product-detail.component';

const routes: Routes=[
{
    path:'',
    component:ProductsComponent
},
{
    path:':id',
    component: ProductDetailComponent
}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule    
    ]
})
export class ProductRoutingModule{}