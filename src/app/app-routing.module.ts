import {NgModule} from '@angular/core';
import { Routes,RouterModule, PreloadAllModules } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AdminGuard} from './admin.guard'
import {PreloadService} from './core/service/preload.service'
const routes:Routes =[
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'',
                redirectTo:'/home',  
                pathMatch :'full',  
            },
            {
                path:'home',
               loadChildren: () => import('./home/home.module').then(m=> m.HomeModule),
                data: {Preload:true}
            },
            {
                path: 'products',
                loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
              },
            {
                path:'contact',
                loadChildren: () => import('./contact/contact.module').then(m=> m.ContactModule),
                data: {Preload:true}
            },
            {
                path:'order',
                
                loadChildren: () => import('./order/order.module').then(m=> m.OrderModule)
            },
           
        ]
    },
    {
        path:'auth',
        loadChildren: () => import('./login/login.module').then(m=> m.LoginModule)
    },
    {
        path:'demo',
        loadChildren: () => import('./demo/demo.module').then(m=> m.DemoModule)

    },
    {
        path:'admin',
        canActivate: [AdminGuard],
        loadChildren: () => import('./admin/admin.module').then(m=> m.AdminModule)
    },
    {
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m=> m.PageNotFoundModule)
    }
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes,{
        preloadingStrategy: PreloadService
    })],
    exports:[RouterModule]
})
export class AppRoutingModule{}