import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProductsContainer } from './containers/products/products.container';
import { ProductDetailComponent } from './component/products-detail/product-detail.component';

const routes: Routes=[
{
    path:'',
    component:ProductsContainer
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